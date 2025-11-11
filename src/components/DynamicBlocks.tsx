import { useEffect, useState } from 'react';

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function DynamicBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: Block[] = [];
      for (let i = 0; i < 15; i++) {
        newBlocks.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 50,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setBlocks(newBlocks);
    };

    generateBlocks();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute rounded-lg opacity-5 dark:opacity-10 bg-primary blur-3xl"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            animation: `float ${block.duration}s ease-in-out ${block.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg) scale(0.9);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
