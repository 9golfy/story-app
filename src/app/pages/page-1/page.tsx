
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page1 = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Initially playing
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audioElement = new Audio('/musics/Saidbysed-Two-of-Us.mp3');
    setAudio(audioElement);

    const playMusicAfterLoad = async () => {
      try {
        await audioElement.play(); // Try to autoplay the music
        setIsPlaying(true); // Set state to reflect that music is playing
      } catch (error) {
        console.log("Autoplay blocked until user interaction:", error);
        setAutoplayBlocked(true); // Show that autoplay was blocked
      }
    };

    const handleLoad = () => playMusicAfterLoad();

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      audioElement.pause();
    };
  }, []);

  const handleUserInteraction = () => {
    if (autoplayBlocked && audio) {
      audio.play(); // Play music after user interaction
      setIsPlaying(true); // Set playing state to true
      setAutoplayBlocked(false); // Reset the block state
    }
  };

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
      className="relative bg-[url('/images/mountain-magic-hour.jpg')] bg-cover flex flex-col justify-center items-center"
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
      onClick={handleUserInteraction} // This handles user interaction
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

      {/* Message with background and opacity */}
      <div className="bg-black bg-opacity-50 rounded-lg p-6 mt-20 text-white text-center max-w-xs">
        <p>
          สำหรับผู้ใช้งาน iOS เพื่อสัมผัสประสบการณ์ได้อย่างเต็มที่ ขอแนะนำให้ใช้งานบนมือถือ
          เปิดผ่าน safari และซ่อนแถบมือถือ
        </p>
      </div>

      {/* Images below the message with numbered labels */}
      <div className="flex flex-col items-center mt-6 space-y-4">
        {/* Numbered image 1 */}
        <div className="flex items-center">
          <span className="mr-4 text-2xl font-bold text-white">1.</span>
          <Image
            src="/images/ios-1.C5hUZYpd.webp"
            alt="iOS Instruction 1"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Numbered image 2 */}
        <div className="flex items-center">
          <span className="mr-4 text-2xl font-bold text-white">2.</span>
          <Image
            src="/images/ios-2.D0p9OJmf.webp"
            alt="iOS Instruction 2"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* If autoplay is blocked, show the image for interaction */}
      {autoplayBlocked && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <Image
            src="/images/start-button-gif.DVb1bHtj_KNbF1.webp"
            alt="Start Button"
            width={300}
            height={300}
            className="cursor-pointer"
          />
        </div>
      )}

      {/* Button at bottom-right */}
      <Link href="/pages/page-2">
        <button className="absolute bottom-4 right-4 px-6 py-3 bg-red-500 text-white rounded-lg text-lg shadow-md">
          กดเพื่อไปต่อ
        </button>
      </Link>
    </div>
  );
};

export default Page1;
