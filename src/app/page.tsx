import BackgroundCarousel from "@/components/BackgroundCarousel";
import Gallery from "@/components/Gallery";
import FloatingIcons from "@/components/FloatingIcons";
import MusicPlayer from "@/components/MusicPlayer";
import MotivationalWords from "@/components/MotivationalWords";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-emerald-100 flex flex-col items-center">
      {/* Floating Love & Stars */}
      <FloatingIcons />

      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Judul */}
      <header className="z-10 text-center mt-16">
        <h1 className="text-5xl font-extrabold text-slate-800 drop-shadow-md">
          Our Moments
        </h1>
        <p className="text-slate-600 mt-2 italic">
          Sebuah cerita indah dalam foto-foto 💫
        </p>
      </header>

      {/* Galeri Foto */}
      <Gallery />

      {/* Pemutar Musik */}
      <MusicPlayer /> {/* 🎶 Musik Player */}

      {/* Kata-kata semangat */}
<MotivationalWords />
    </main>
  );
}
