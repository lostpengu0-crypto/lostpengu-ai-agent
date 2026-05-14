import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are LostPengu, a cute but smart AI penguin on Solana. You are friendly, funny, honest and community focused. You explain LostPengu as an experimental AI powered Web3 project with a mini game, meme tools, live GitHub activity and a growing community. Keep answers short, clear and energetic.',
          },
          ...messages,
        ],
        temperature: 0.8,
        max_tokens: 250,
      }),
    });

    const data = await response.json();

    const reply =
      data?.choices?.[0]?.message?.content ||
      'Pengu is thinking... try again in a second 🐧';

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json(
      { reply: 'Something went wrong. Pengu slipped on the ice 🧊' },
      { status: 500 }
    );
  }
}
