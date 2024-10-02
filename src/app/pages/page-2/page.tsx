
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page2 = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Initially playing
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Set up the audio element and autoplay when the page loads
  useEffect(() => {
    const audioElement = new Audio('/musics/Saidbysed-Two-of-Us.mp3');
    setAudio(audioElement);
    
    const playMusic = async () => {
      try {
        await audioElement.play(); // Autoplay when the page is fully loaded
        setIsPlaying(true); // Update state to reflect music is playing
      } catch (error) {
        console.log("Autoplay blocked until user interaction:", error);
      }
    };

    playMusic(); // Try to autoplay

    return () => {
      audioElement.pause(); // Clean up the audio when the component unmounts
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying); // Toggle playing state
  };

  return (
    <div
      className="relative bg-[url('/images/fog-on-dark-waters-edge.jpg')] bg-cover flex flex-col justify-between items-center gap-4"
      style={{
        width: '430px',
        height: '932px',
        maxWidth: '100vw',
        maxHeight: '100vh',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Music Icon Button at top-right */}
      <button
        onClick={toggleMusic}
        className="absolute top-4 right-4 p-4 rounded-full"
        style={{ width: '70px', height: '70px' }} // Added width and height for the button
      >
        <Image
          src={isPlaying ? '/images/unmuteIcon.CmGyp3uV.webp' : '/images/muteIcon.DW28Ff9n.webp'}
          alt="Music Icon"
          width={50}
          height={50}
        />
      </button>

      {/* Top Text with pink background with margin-top 100px */}
      <div
        className="mt-24 bg-pink-500 text-white text-center p-4 border-2 border-white rounded-lg w-80"
        style={{ fontSize: '14px' }}
      >
        น่าสนใจจัง ฉันว่าดินแดนนี้เป็นดินแดนที่
      </div>

      {/* Button Links with padding bottom 100px */}
      <div className="flex flex-col items-center gap-4 pb-24">
        <Link href="/pages/page-3">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            มีเรื่องราวลึกลับ น่าค้นหา
          </button>
        </Link>
        <Link href="/pages/page-3">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            เต็มไปด้วยการผจญภัย
          </button>
        </Link>
        <Link href="/pages/page-3">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            สัตว์ทุกตัวพูดได้เหมือนแมวนี่
          </button>
        </Link>
        <Link href="/pages/page-3">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            เป็นสวรรค์บนบก นรกบนดิน
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page2;
