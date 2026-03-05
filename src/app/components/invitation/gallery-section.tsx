"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

// Tus imágenes de la carpeta public/images
const images = [
  { src: "/images/egres.jpg", alt: "Egresados celebrando" },
  { src: "/images/egres1.jpg", alt: "Lugar del evento" },
  { src: "/images/egres2.jpg", alt: "Detalles de graduación" },
  { src: "/images/egres3.jpg", alt: "Amigos en la fiesta" },
]

// Variantes para que entren una tras otra
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre fotos
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
}

export function GallerySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
<section ref={ref} className="bg-[#f8f5f0] px-12 md:px-40 py-24 md:py-32">
      <motion.p
        className="mb-16 text-center font-sans text-[10px] tracking-[0.5em] text-muted-foreground uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Nuestros Momentos
      </motion.p>

      <motion.div 
        className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {images.map((image) => (
          <motion.div
            key={image.src}
            variants={itemVariants}
            className="group relative aspect-[4/5] overflow-hidden bg-muted shadow-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 400px"
            />
            {/* Overlay sutil al pasar el mouse/tocar */}
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}