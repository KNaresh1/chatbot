import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import { z } from 'zod';

const UUID_REGEX =
   /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const chatSchema = z.object({
   conversationId: z.string().regex(UUID_REGEX, 'Invalid UUID'),
   prompt: z
      .string()
      .trim()
      .min(1, 'Prompt is required.')
      .max(1000, 'Prompt is too long, max 1000 characters'),
});

export const chatController = {
   async sendMessage(req: Request, res: Response) {
      const parseResult = chatSchema.safeParse(req.body);

      if (!parseResult.success) {
         res.status(400).json({ errors: parseResult.error.issues });
         return;
      }

      try {
         const { conversationId, prompt } = req.body;
         const { message } = await chatService.sendMessage(
            conversationId,
            prompt
         );

         res.json({ message });
      } catch (error) {
         res.status(500).json({ error: 'Failed to generate a response.' });
      }
   },
};
