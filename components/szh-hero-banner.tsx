"use client"

import { useState } from "react"
import Image from "next/image"
import { AdvertiserInfoModal } from "./advertiser-info-modal"

export function SzhHeroBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative pt-20 md:pt-24 pb-12 md:pb-16 border-b border-mag-border overflow-hidden min-h-[500px] md:min-h-[600px] w-full">
      {/* Background Image - full width */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero-croatian-football.jpg"
          alt="Hrvatski nogomet"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="container mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">
              Sportska Analitika 2025
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-mag-black mb-4 md:mb-6 leading-tight">
            Profesionalne Ocjene
            <br />
            <span className="text-mag-green">Servisa za Kladenje</span>
          </h1>

          <p className="text-mag-grey text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Nezavisne recenzije i strucne analize vodecih platformi za sportsko kladenje u Hrvatskoj. Usporedite ponude,
            kvote i usluge na temelju objektivnih kriterija.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mag-green"></div>
              <span className="text-mag-charcoal font-medium">Licencirani operateri</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mag-terracotta"></div>
              <span className="text-mag-charcoal font-medium">Verificirane informacije</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mag-steel"></div>
              <span className="text-mag-charcoal font-medium">Strucna analiza</span>
            </div>
          </div>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
