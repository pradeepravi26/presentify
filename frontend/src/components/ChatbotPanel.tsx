import { useState } from 'react';

interface ChatbotPanelProps {
  onSlideUpdate: (title: string, subtitle: string, bullets: string[]) => void;
}

export default function ChatbotPanel({ onSlideUpdate }: ChatbotPanelProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateSlide = async () => {
    if (!prompt.trim()) return;

    setLoading(true);

    // Simulate an API call to generate slide data
    // Replace with your real AI call
    setTimeout(() => {
      // Example "AI-generated" slide content
      const generatedTitle = 'Artificial Intelligence (example but need to put BACK END in)';
      const generatedSubtitle = `Prompt: ${prompt}`;
      const generatedBullets = [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Robotics',
      ];

      onSlideUpdate(generatedTitle, generatedSubtitle, generatedBullets);
      setLoading(false);
      setPrompt('');
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-semibold mb-4">AI Chatbot</h2>

      <textarea
        className="border border-gray-300 p-3 rounded mb-4 flex-grow resize-none"
        rows={8}
        placeholder="Type your topic or questions..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerateSlide}
        disabled={loading}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        {loading ? 'Generating...' : 'Generate Slide'}
      </button>
    </div>
  );
}
