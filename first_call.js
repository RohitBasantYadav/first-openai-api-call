import dotenv from 'dotenv';
import OpenAI from 'openai';
import readline from 'node:readline';
dotenv.config();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

// console.log(rl.question(`What's your name?`));
rl.question(`Hey, I am a experienced software developer and a helpful tutor as well.\nAsk your question and hit enter: \n`, (query) => {
    generateText(query);
    rl.close();
});


const client = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function generateText(userQuery){
    try {
        const completion = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'system', content: 'You are an experienced software developer and a helpful tutor as well.' },
              { role: 'user', content: userQuery }, //  'Are semicolons optional in JavaScript?'
            ],
            max_tokens: 400,
        });
        console.log("Response:\n", completion.choices[0].message.content)
        console.log("Completion tokens: ", completion.usage.completion_tokens)
        console.log("Prompt tokens: ", completion.usage.prompt_tokens)
        console.log("Total tokens: ", completion.usage.total_tokens)
    } catch (error) {
        console.log("Error while generating response: ", error);
    }
}

// generateText();