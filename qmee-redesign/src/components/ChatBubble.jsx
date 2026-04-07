export default function ChatBubble({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`max-w-[75%] px-6 py-4 rounded-3xl text-[15px] leading-relaxed
        ${isUser 
          ? 'bg-primary text-white rounded-br-none' 
          : 'bg-card text-gray-200 rounded-bl-none'}`}
      >
        {message}
      </div>
    </div>
  );
}
