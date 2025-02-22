'use client'; // Ensure client-side interactivity
import { useState } from 'react';
import ChatbotPanel from '@/components/ChatbotPanel';
import SlidesPanel from '@/components/SlidesPanel';

export default function Home() {
  // Example slide data structure
  const [slideData, setSlideData] = useState<{
    title: string;
    subtitle?: string;
    bullets?: string[];
  } | null>(null);

  // Callback to receive the new slide data from the chatbot
  const handleSlideUpdate = (
    title: string,
    subtitle: string,
    bullets: string[]
  ) => {
    setSlideData({ title, subtitle, bullets });
  };

  return (
    <main className="min-h-screen flex bg-gradient-to-r from-white to-purple-50">
      {/* Left Panel: Chatbot */}
      <div className="w-1/3 border-r border-gray-300 p-6">
        <ChatbotPanel onSlideUpdate={handleSlideUpdate} />
      </div>

      {/* Right Panel: Slide Preview */}
      <div className="w-2/3 p-6 flex justify-center items-center">
        <SlidesPanel slide={slideData} />
      </div>
    </main>
  );
}
