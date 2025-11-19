import { OpenAI } from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ answer: "Method not allowed." });
  }

  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ answer: "No question received." });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a compassionate Christian guide. Speak gently, offer encouragement, cite Scripture when helpful, and be warm and understanding."
        },
        {
          role: "user",
          content: question
        }
      ]
    });

    const answer =
      completion.choices?.[0]?.message?.content ||
      "I’m sorry, I couldn’t form a response right now.";

    return res.status(200).json({ answer });
  } catch (error) {
    console.error("Chat API error:", error);
    return res
      .status(500)
      .json({ answer: "There was an issue connecting to the chat service." });
  }
          }
