import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const videos = [
  '/videos/hero1.mp4',
  '/videos/hero2.mp4',
  '/videos/hero3.mp4',
];

export default function VideoHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <video
              src={videos[currentIndex]}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,23,14,0.82)_0%,rgba(0,23,14,0.48)_46%,rgba(0,0,0,0.08)_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pt-28 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl pb-24"
        >
          <span className="mb-6 inline-block rounded-full border border-white/18 bg-white/12 px-4 py-2 font-label-sm uppercase tracking-widest text-white shadow-sm backdrop-blur-xl">
            Uganda Circular Initiative
          </span>
          <h1 className="mb-8 max-w-4xl font-display-lg text-[clamp(3.25rem,8vw,6.8rem)] leading-[0.94] text-white">
            Accelerating Uganda's Transition to a Circular Economy.
          </h1>
          <p className="mb-9 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            A collaborative platform helping producers, recyclers, communities, and government build a transparent EPR system for Uganda.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/partnerships" className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-black text-primary shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all hover:-translate-y-0.5 hover:bg-primary-fixed active:scale-[0.98]">
              Get Involved
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="glass-panel flex items-center gap-2 rounded-full px-8 py-4 font-bold text-white transition-all hover:bg-white/14 active:scale-[0.98]">
              <PlayCircle className="h-5 w-5 fill-white text-primary-container" />
              Watch our Vision
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {videos.map((video, index) => (
          <button
            key={video}
            type="button"
            aria-label={`Show hero video ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${currentIndex === index ? 'w-10 bg-white' : 'w-2.5 bg-white/38 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </header>
  );
}
