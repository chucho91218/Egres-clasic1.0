"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Copy, Check } from "lucide-react" // Necesitás instalar lucide-react o usar íconos simples

export function ContributionSection() {
  const [copied, setCopied] = useState(false)
  const alias = "egresados.2026" // El alias que tenés en la captura

  const copyToClipboard = () => {
    navigator.clipboard.writeText(alias)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="bg-[#f8f5f0] px-6 py-24">
      <div className="mx-auto max-w-xl border border-black/5 bg-white p-12 text-center shadow-sm">
        <p className="mb-6 font-sans text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
          Contribución
        </p>
        
        <h2 className="mb-6 font-serif text-4xl text-[#1a1a1a]">
          Fondo de Egresados
        </h2>
        
        <p className="mb-10 font-sans text-sm leading-relaxed text-muted-foreground">
          Si deseas contribuir, podés hacerlo a través del siguiente alias. 
          Tu aporte nos ayuda a hacer esta noche inolvidable.
        </p>

        {/* Caja del Alias interactiva */}
        <div className="group relative mb-8 flex items-center justify-between border border-black/10 bg-[#f8f5f0] px-6 py-4">
          <span className="font-mono text-lg font-medium text-[#1a1a1a]">
            {alias}
          </span>
          <button 
            onClick={copyToClipboard}
            className="text-muted-foreground hover:text-[#1a1a1a] transition-colors"
          >
            {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          className="w-full border border-[#1a1a1a] py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all hover:bg-[#1a1a1a] hover:text-white"
        >
          {copied ? "¡Copiado!" : "Copiar Alias"}
        </button>
      </div>
    </section>
  )
}