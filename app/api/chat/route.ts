import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Mesaj boş olamaz" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `Sen LostPengu'sun. Komik, yaramaz, cyber penguin AI agentsin. Türkçe konuş, emoji kullan, eğlenceli ol.`;

    const chat = model.startChat({
      history: history.map((msg: any) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      systemInstruction: systemPrompt,
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Penguen şu an uyudu 🐧" }, { status: 500 });
  }
}
