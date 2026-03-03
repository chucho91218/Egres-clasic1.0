"use client"

import { motion } from "framer-motion"
import { Music, Pause } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function MusicIndicator() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Configuración del audio
    const audio = new Audio("/images/Coldplay.mp3")
    audio.loop = true
    audioRef.current = audio

    // Función para intentar reproducir
    const playAudio = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true)
          // Una vez que suena, quitamos los escuchas de eventos
          removeEventListeners()
        })
        .catch((err) => {
          console.log("Autoplay bloqueado, esperando interacción...", err)
        })
    }

    const removeEventListeners = () => {
      window.removeEventListener("click", playAudio)
      window.removeEventListener("scroll", playAudio)
      window.removeEventListener("touchstart", playAudio)
    }

    // Intentamos sonar de entrada
    playAudio()

    // Si el navegador bloquea el inicio, sonará al primer click o scroll
    window.addEventListener("click", playAudio)
    window.addEventListener("scroll", playAudio)
    window.addEventListener("touchstart", playAudio)

    return () => {
      audio.pause()
      removeEventListeners()
    }
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-secondary"
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {isPlaying && (
        <motion.div
          className="absolute inset-0 border border-gold"
          animate={{ scale: [1, 1.4, 1.4], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      
      {isPlaying ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}

      {isPlaying && (
        <div className="absolute -top-1 -right-1 flex items-end gap-px">
          {[0, 0.2, 0.1].map((delay, i) => (
            <motion.div
              key={i}
              className="w-[2px] bg-gold"
              animate={{ height: [3, 8, 3] }}
              transition={{ duration: 0.6, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          ))}
        </div>
      )}
    </motion.button>
  )
}