"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function InvitationFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <footer ref={ref} className="flex flex-col items-center gap-4 px-6 py-16">
      <motion.div
        className="h-8 w-px bg-border"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6 }}
      />
      <motion.p
        className="font-sans text-[10px] tracking-[0.4em] text-muted-foreground/60 uppercase"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hecho con ❤️ por Festa - Invitaciones Web
      </motion.p>
    </footer>
  )
}
