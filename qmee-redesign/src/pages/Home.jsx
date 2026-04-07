import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen mesh-bg pt-20">
      <div className="max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
          Ask Anything.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Get Clarity.
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Your intelligent AI companion with beautiful design and thoughtful answers.
        </p>

        <Link 
          to="/chat"
          className="inline-block px-10 py-4 bg-primary hover:bg-pink-600 text-lg font-medium rounded-2xl transition-all active:scale-95"
        >
          Start Chatting Now →
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 pb-24">
        {[
          { title: "Fast & Smart", desc: "Powered by advanced models" },
          { title: "Beautiful UI", desc: "Modern, clean and delightful" },
          { title: "Always Available", desc: "Chat anytime, anywhere" }
        ].map((item, i) => (
          <div key={i} className="bg-card p-8 rounded-3xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
