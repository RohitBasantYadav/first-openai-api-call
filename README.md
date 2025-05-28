# OpenAI API Chat Interface

This is a simple Node.js application that demonstrates how to interact with OpenAI's GPT-3.5 Turbo model through their API. The application creates a command-line interface where users can ask questions and receive AI-generated responses.

## Features

- Interactive command-line interface
- Integration with OpenAI's GPT-3.5 Turbo model
- Token usage tracking
- Environment variable support for API key security

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (Node Package Manager)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone <your-repository-url>
   cd first-openai-api-call
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   API_KEY=your_openai_api_key_here
   ```
   You can get your API key from [OpenAI's platform](https://platform.openai.com/api-keys)

## Running the Application

To start the application, run:
```bash
npm start
```

The application will prompt you to enter your question. Type your question and press Enter to receive a response from the AI model.

## Project Structure

- `first_call.js` - Main application file containing the OpenAI API integration and CLI interface
- `package.json` - Project configuration and dependencies
- `.env` - Environment variables file (create this file and add your API key)

## Dependencies

- `openai` - Official OpenAI API client
- `dotenv` - Environment variable management
- `readline` - Node.js built-in module for CLI interaction

## Notes

- The application uses the GPT-3.5 Turbo model
- Responses are limited to 400 tokens by default
- The system prompt is set to "You are an experienced software developer and a helpful tutor as well."
- Token usage (completion, prompt, and total) is displayed after each response
