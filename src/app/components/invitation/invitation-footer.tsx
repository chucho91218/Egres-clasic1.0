"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react" // Necesitás instalar lucide-react o usar un SVG

export function InvitationFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <footer ref={ref} className="flex flex-col items-center gap-6 px-6 py-20 pb-24">
      {/* Línea divisoria minimalista */}
      <motion.div
        className="h-12 w-px bg-gold/20"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.8 }}
      />

      {/* Logo Festa con opacidad reducida para sutileza */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 0.5, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="hover:opacity-100 transition-opacity duration-500"
      >
        <Image 
          src="/images/festa_transparente.png" 
          alt="Festa Logo" 
          width={120} 
          height={60} 
          className="grayscale brightness-50" // Lo hace más sobrio
        />
      </motion.div>

      {/* Instagram Link sutil */}
      <motion.a
        href="https://instagram.com/festa_invitaciones"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[9px] tracking-[0.3em] text-muted-foreground/40 uppercase hover:text-gold transition-colors"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Instagram size={12} strokeWidth={1.5} />
        <span>@festa_invitaciones</span>
      </motion.a>
    </footer>
  )
}