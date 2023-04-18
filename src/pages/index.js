import { Inter } from 'next/font/google'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const API_KEY = 'MY_API_KEY';
const API_URL = 'https://api.openai.com/v1/';

async function generateText(prompt) {
  const response = await axios.post(`${API_URL}engines/davinci-codex/completions`, {
    prompt,
    max_tokens: 1024,
    n: 1,
    stop: '\n',
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  return response.data.choices[0].text.trim();
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Chatbota</h1>
        <p>Chatbot</p>
      </div>
    </main>
  )
}
