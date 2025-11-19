export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a warm, kind, Christian-themed chatbot that encourages and helps users.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("OpenAI API Error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "I'm here if you'd like to talk.",
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}
