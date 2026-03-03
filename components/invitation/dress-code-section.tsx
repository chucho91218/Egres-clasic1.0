"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function HangerIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold"
    >
      <path d="M24 8a4 4 0 1 1 0 8" />
      <path d="M24 16 6 32h36L24 16Z" />
      <line x1="6" y1="32" x2="42" y2="32" />
    </svg>
  )
}

export function DressCodeSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <HangerIcon />
        </motion.div>

        <motion.p
          className="font-sans text-xs tracking-[0.4em] text-muted-foreground uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Dress Code
        </motion.p>

        <motion.h2
          className="font-serif text-3xl tracking-[0.1em] text-foreground md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Elegante
        </motion.h2>

        <motion.p
          className="max-w-sm font-sans text-sm leading-relaxed tracking-wide text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Te pedimos que vengas con tu mejor look. Vestimenta formal
          en tonos oscuros o colores sobrios. La noche lo merece.
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          className="h-12 w-px bg-border"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </div>
    </section>
  )
}
