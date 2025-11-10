import { motion } from 'framer-motion';
import { Play, Pause, VolumeX } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTriedAutoplay = useRef(false);

  useEffect(() => {
    if (hasTriedAutoplay.current || !audioRef.current) return;
    
    const tryPlay = async () => {
      if (!audioRef.current) return;
      
      try {
        audioRef.current.volume = 0.1;
        audioRef.current.muted = false;
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        console.log('✅ Música iniciada automáticamente');
        hasTriedAutoplay.current = true;
      } catch (err) {
        console.log('⏸️ Autoplay bloqueado, esperando interacción del usuario');
      }
    };

    // Intentar inmediatamente
    setTimeout(tryPlay, 300);

    // Handler global para cualquier interacción
    const handleUserInteraction = async () => {
      if (hasTriedAutoplay.current || !audioRef.current) return;
      
      try {
        audioRef.current.volume = 0.1;
        audioRef.current.muted = false;
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        console.log('✅ Música iniciada con interacción del usuario');
        hasTriedAutoplay.current = true;
        
        // Limpiar listeners
        cleanup();
      } catch (err) {
        console.error('Error al reproducir:', err);
      }
    };

    // Agregar múltiples listeners
    const events = ['click', 'scroll', 'touchstart', 'keydown'];
    events.forEach(event => {
      window.addEventListener(event, handleUserInteraction, { once: true, capture: true });
    });

    const cleanup = () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserInteraction, { capture: true });
      });
    };

    return cleanup;
  }, []);

  const togglePlayPause = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.1;
        audioRef.current.muted = false;
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        hasTriedAutoplay.current = true;
      }
    } catch (err) {
      console.error('Error en play/pause:', err);
    }
  };

  const toggleMute = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!audioRef.current) return;
    
    const newMutedState = !isMuted;
    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    
    if (!newMutedState && !isPlaying) {
      try {
        audioRef.current.volume = 0.1;
        await audioRef.current.play();
        setIsPlaying(true);
        hasTriedAutoplay.current = true;
      } catch (err) {
        console.error('Error al desmutear:', err);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/background-music.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-1.5"
      >
        <motion.button
          onClick={togglePlayPause}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 glass-card rounded-lg hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 group"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current" />
          )}
        </motion.button>

        <motion.button
          onClick={toggleMute}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 glass-card rounded-lg transition-all hover:scale-110 group ${
            isMuted 
              ? 'text-slate-300 hover:text-cyan-400' 
              : 'text-cyan-400 hover:text-cyan-300'
          }`}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          <VolumeX className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </>
  );
}
