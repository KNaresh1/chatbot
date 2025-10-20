import path from 'path';
import fs from 'fs';
import { conversationRepository } from '../repositories/conversation.repository';
import { llmClient } from '../llm/client';
import template from '../prompts/chatbot.txt';

const parkInfo = fs.readFileSync(
   path.join(__dirname, '..', 'prompts', 'WonderWorld.md'),
   'utf-8'
);

const instructions = template.replace('{{parkInfo}}', parkInfo);

interface ChatResponse {
   id: string;
   message: string;
}

export const chatService = {
   async sendMessage(
      conversationId: string,
      prompt: string
   ): Promise<ChatResponse> {
      const response = await llmClient.generateText({
         instructions,
         prompt,
         previousResponseId:
            conversationRepository.getLastResponseId(conversationId),
      });

      conversationRepository.setLastResponseId(conversationId, response.id);

      return { id: response.id, message: response.text };
   },
};
