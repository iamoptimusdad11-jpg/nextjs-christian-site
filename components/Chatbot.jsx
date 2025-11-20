import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text })   // ✅ FIXED
      });

      const data = await res.json();

      const botMsg = { 
        role: 'assistant', 
        text: data.reply || 'Sorry, I could not find an answer right now.' // ✅ FIXED
      };

      setMessages(m => [...m, botMsg]);

    } catch (err) {
      setMessages(m => [
        ...m, 
        { role: 'assistant', text: 'Error connecting to chat service.' }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <div className="h-64 overflow-auto p-2 space-y-3 border rounded-md">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <div className={`inline-block p-2 rounded ${m.role === 'user' ? 'bg-indigo-50' : 'bg-gray-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 rounded border"
          placeholder="Ask a Christian question..."
        />
        <button 
          onClick={send}
          disabled={loading}
          className="px-4 py-2 rounded bg-pink-600 text-white"
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  );
}
