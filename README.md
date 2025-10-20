# 🎢 WonderWorld AI ChatBot

An interactive **AI-powered chatbot** designed specifically for **WonderWorld Theme Park**.  
Built using **React, Vite, Bun, and the OpenAI API**, this chatbot provides engaging, domain-specific conversations
about the park’s attractions, facilities, tickets, and visitor information — enhanced with **sound effects and
notifications** for a more immersive user experience.

---

### 🌟 Overview

The **WonderWorld ChatBot** combines a sleek modern frontend with intelligent backend processing to deliver
context-aware, real-time responses.

It uses:

- 🏞️ **`WonderWorld.md`** — as the core knowledge base containing park details, attractions, facilities, and general
  FAQs.
- 🧠 **`chatbot.txt`** — to define **chatbot-specific instructions** and conversational guidelines, ensuring responses
  remain on-theme, friendly, and informative.
- 🔔 **Notification & Pop Sounds** — played using assets like `src/assets/sounds/notification.mp3` to make the chat
  experience more interactive and lively.
- 🤖 **OpenAI LLM Integration** — the chatbot sends both **prompts** and **instruction context** to the model to improve
  accuracy and helpfulness of responses.

---

### 🚀 Key Features

- **Theme-Specific Knowledge**: Trained on `WonderWorld.md` content for contextual, park-related responses.
- **Instruction-Aware Chatbot**: Uses `chatbot.txt` to guide tone, style, and behavior for consistent communication.
- **Interactive UX**: Plays pop and notification sounds for message send/receive actions.
- **Real-Time Chat Interface**: Instant message flow powered by React and OpenAI streaming.
- **Modern Design**: Clean and responsive interface built with TailwindCSS and shadcn/ui.
- **Scalable Architecture**: Easily extensible to support more parks or domains.

---

### 🧱 Tech Stack

Frontend (Client):

- React (Vite + TypeScript), TailwindCSS + shadcn/ui, React Query, Axios

Backend (Server):

- Bun – runtime and package manager
- Express.js – REST API framework
- OpenAI API – for chat completions and intelligent responses
- Layered structure: routes → controllers → services → clients

### ▶️ Run the Project Locally

To start both the frontend (React + Vite) and backend (Bun + Express) together, simply run:

```bash
npm run dev
```

This command uses concurrently to launch both servers in parallel:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

Make sure you’ve:

1. Installed dependencies

```bash
bun install
```

2. Configured your .env file

Create a .env file in the project root and add your OpenAI API key:

```
OPENAI_API_KEY=<your_openai_api_key>
```
