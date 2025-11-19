import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { question } = req.body || {};
  if (!question) return res.status(400).json({ error: 'No question provided' });

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Chat service not configured' });

    const resp = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful, compassionate Christian assistant. Use Scripture carefully and cite references when relevant. Do not provide medical, legal, or financial advice.' },
        { role: 'user', content: question }
      ],
      temperature: 0.2,
      max_tokens: 700
    }, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    const answer = resp.data.choices?.[0]?.message?.content || 'No response';
    res.status(200).json({ answer });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'Chat failed' });
  }
}
