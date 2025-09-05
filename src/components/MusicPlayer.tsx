"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // biar lembut
      audio.play().catch(() => {
        // browser kadang blokir autoplay
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music.mp3" loop />
      <button
        onClick={togglePlay}
        className="p-4 rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:scale-110 transition"
      >
        {isPlaying ? (
          <FaPause className="text-emerald-600" />
        ) : (
          <FaPlay className="text-emerald-600" />
        )}
      </button>
    </div>
  );
}
