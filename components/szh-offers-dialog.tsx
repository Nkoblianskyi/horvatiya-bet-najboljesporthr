"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Gift, TrendingUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { SzhBettingSite } from "@/types/szh-betting-types"

interface SzhOffersDialogProps {
  sites: SzhBettingSite[]
}

export function SzhOffersDialog({ sites }: SzhOffersDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-gray-300" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[520px] p-0 overflow-hidden border-2 border-yellow-500 shadow-2xl bg-white">
        {/* Croatian flag pattern background */}
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-blue-600" />
        </div>

        {/* Golden gradient header */}
        <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 px-6 py-8 mt-2">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-20" />

          <div className="relative flex items-center justify-center gap-2 mb-3">
            
            <DialogHeader>
              <DialogTitle className="text-center font-display text-3xl font-black text-white uppercase tracking-tight drop-shadow-md">
                Ekskluzivna Ponuda
              </DialogTitle>
            </DialogHeader>
          </div>
          <p className="text-center text-white font-semibold text-sm drop-shadow">
            🇭🇷 Najbolja ponuda za hrvatske igrače
          </p>
        </div>

        <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-8">
          {/* Logo with golden border */}
          <div className="relative bg-white h-28 w-full max-w-[240px] mx-auto mb-6 border-4 border-yellow-400 shadow-lg overflow-hidden">
            <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain p-4" />
          </div>

          {/* Rating with golden stars */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
            <span className="font-bold text-2xl text-gray-900">{topSite.rating.toFixed(1)}</span>
            <span className="text-gray-500 text-sm">({topSite.reviews} recenzija)</span>
          </div>

          {/* Bonus section with golden gradient */}
          <div className="relative bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50 p-6 text-center border-2 border-yellow-400 mb-6 shadow-md overflow-hidden">
            <div className="absolute top-2 right-2">
              <TrendingUp className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="text-yellow-700 text-xs uppercase font-bold tracking-wider mb-2 flex items-center justify-center gap-1">
              <Star className="h-3 w-3 fill-yellow-600 text-yellow-600" />
              Bonus Dobrodošlice
              <Star className="h-3 w-3 fill-yellow-600 text-yellow-600" />
            </div>
            <p className="font-display font-black text-gray-900 text-4xl leading-tight uppercase tracking-tight">
              {topSite.bonus}
            </p>
          </div>

          {/* Green CTA button */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-black text-center transition-all transform hover:scale-105 mb-4 uppercase tracking-wide shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Preuzmi Bonus Sada
          </a>

          {/* Footer with Croatian flag colors accent */}
          <div className="text-center bg-gradient-to-r from-red-50 via-white to-blue-50 border-2 border-gray-200 p-4">
            <p className="text-xs text-gray-700 font-semibold">+18 | Primjenjuju se Uvjeti | Kockajte se Odgovorno</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
