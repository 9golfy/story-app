"use client"; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Page5 = () => {
  const [name, setName] = useState('');
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

  useEffect(() => {
    // Retrieve the name from local storage
    const userName = localStorage.getItem('userName');
    setName(userName || 'Guest'); // Fallback to 'Guest' if no name is found
  }, []);

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
        style={{ width: '70px', height: '70px' }}
      >
        <Image
          src={isPlaying ? '/images/unmuteIcon.CmGyp3uV.webp' : '/images/muteIcon.DW28Ff9n.webp'}
          alt="Music Icon"
          width={50}
          height={50}
        />
      </button>

      {/* Greeting with dynamic name */}
      <div className="mt-24 bg-pink-500 text-white text-center p-4 border-2 border-white rounded-lg w-80">
        <h1 className="text-3xl font-bold mb-4">Hello, {name}!</h1>
        <p>Welcome to the next step of your journey!</p>
      </div>

      {/* Button Links with padding bottom 100px */}
      <div className="flex flex-col items-center gap-4 pb-24">
        <Link href="/pages/page-4">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            มีเรื่องราวลึกลับ น่าค้นหา
          </button>
        </Link>
        <Link href="/pages/page-4">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            เต็มไปด้วยการผจญภัย
          </button>
        </Link>
        <Link href="/pages/page-4">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            สัตว์ทุกตัวพูดได้เหมือนแมวนี่
          </button>
        </Link>
        <Link href="/pages/page-4">
          <button className="p-2 bg-black text-white border-2 border-white rounded-lg shadow-lg w-80 transform transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black">
            เป็นสวรรค์บนบก นรกบนดิน
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page5;
