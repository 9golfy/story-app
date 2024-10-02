
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page3 = () => {
  const [name, setName] = useState('');
  const [isPlaying, setIsPlaying] = useState(true); // Initially playing
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const router = useRouter();

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

  const handleSubmit = () => {
    // Store the name in local storage or use state management (context, etc.)
    localStorage.setItem('userName', name); // Store in local storage
    router.push('/pages/page-4'); // Navigate without passing the name in the URL
  };

  return (
    <div
      className="relative bg-[url('/images/view-of-the-sea-iphone-wallpaper.jpg')] bg-cover flex items-center justify-center"
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

      {/* Input and Submit Section */}
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg mb-4"
        />
        <button onClick={handleSubmit} className="p-4 bg-white rounded-lg shadow-lg w-40">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Page3;
