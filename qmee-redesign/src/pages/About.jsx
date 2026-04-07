export default function About() {
  return (
    <div className="min-h-screen mesh-bg pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold mb-8">About QMee</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          QMee is a modern AI assistant designed to be helpful, honest, and beautifully presented. 
          This redesigned frontend showcases clean typography, smooth interactions, and a premium feel 
          while keeping the core experience simple and delightful.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-card p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400">Making advanced AI accessible with elegant design and thoughtful interactions.</p>
          </div>
          <div className="bg-card p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-4">Built By</h3>
            <p className="text-gray-400">
              This redesign was created by Rajiv Rai as part of the Frontend Developer assignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
