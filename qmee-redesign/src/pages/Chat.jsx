import { useState } from 'react';
import ChatBubble from '../components/ChatBubble';

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today? 😊", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, isUser: true }]);
    
    // Simulate AI reply
    setTimeout(() => {
      const replies = [
        "That's an interesting question!",
        "Let me think about that for a moment...",
        "Here's what I found for you.",
        "Absolutely! Here's my take on it."
      ];
      setMessages(prev => [...prev, {
        text: replies[Math.floor(Math.random() * replies.length)],
        isUser: false
      }]);
    }, 800);

    setInput("");
  };

  return (
    <div className="min-h-screen mesh-bg pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold mb-2">Talk to QMee</h2>
          <p className="text-gray-400">Your personal AI assistant</p>
        </div>

        {/* Chat Window */}
        <div className="bg-card rounded-3xl h-[70vh] flex flex-col overflow-hidden shadow-2xl border border-white/5">
          {/* Chat Header */}
          <div className="p-5 border-b border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">Q</div>
            <div>
              <p className="font-medium">QMee Assistant</p>
              <p className="text-xs text-emerald-400">● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-1">
            {messages.map((msg, i) => (
              <ChatBubble key={i} message={msg.text} isUser={msg.isUser} />
            ))}
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-white/10 bg-dark">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="What's on your mind?"
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary placeholder-gray-500"
              />
              <button
                onClick={sendMessage}
                className="px-8 bg-primary hover:bg-pink-600 rounded-2xl font-medium transition-all active:scale-95"
              >
                Send
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-500 mt-4">
              QMee may produce inaccurate information. Verify important facts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
