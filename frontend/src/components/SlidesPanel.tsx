interface SlideData {
    title: string;
    subtitle?: string;
    bullets?: string[];
  }
  
  interface SlidesPanelProps {
    slide: SlideData | null;
  }
  
  export default function SlidesPanel({ slide }: SlidesPanelProps) {
    if (!slide) {
      return (
        <div className="text-gray-500">
          <p>No slides generated yet. Try prompting the chatbot!</p>
        </div>
      );
    }
  
    return (
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6">
        {/* Icon or image could go here */}
        <h1 className="text-2xl font-bold mb-2">{slide.title}</h1>
        {slide.subtitle && (
          <p className="text-gray-600 italic mb-4">{slide.subtitle}</p>
        )}
  
        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="list-disc list-inside space-y-1">
            {slide.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  