import Image from "next/image"
import { Star } from "lucide-react"
import type { SzhBettingSite } from "@/types/szh-betting-types"
import Link from "next/link"

interface SzhRatingListProps {
  sites: SzhBettingSite[]
}

export function SzhBettingRatings({ sites }: SzhRatingListProps) {
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-mag-terracotta text-mag-terracotta" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 text-mag-grey-light" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-mag-grey-light" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 fill-mag-terracotta text-mag-terracotta" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getCardStyle = (index: number) => {
    if (index === 0) {
      return {
        container: "bg-mag-white border-l-3 border-mag-green hover:shadow-md transition-all",
        badge: "bg-mag-green text-mag-white",
        buttonPrimary: "bg-mag-green hover:bg-mag-charcoal",
      }
    } else if (index === 1) {
      return {
        container: "bg-mag-white border-l-3 border-mag-terracotta hover:shadow-md transition-all",
        badge: "bg-mag-terracotta text-mag-white",
        buttonPrimary: "bg-mag-terracotta hover:bg-mag-charcoal",
      }
    } else if (index === 2) {
      return {
        container: "bg-mag-white border-l-3 border-mag-steel hover:shadow-md transition-all",
        badge: "bg-mag-steel text-mag-white",
        buttonPrimary: "bg-mag-steel hover:bg-mag-charcoal",
      }
    } else {
      return {
        container: "bg-mag-white border-l-3 border-mag-grey-light hover:shadow-md transition-all",
        badge: "bg-mag-grey text-mag-white",
        buttonPrimary: "bg-mag-charcoal hover:bg-mag-black",
      }
    }
  }

  return (
    <section className="py-8 md:py-10 bg-mag-cream">
      <div className="container mx-auto px-3 md:px-4 max-w-[1400px]">
        <div className="grid gap-4">
          {sites.map((site, index) => {
            const showBadge = index < 3 && site.badges.length > 0
            const cardStyle = getCardStyle(index)

            return (
              <div
                key={site.id}
                className={`relative overflow-visible transition-all pt-4 border border-mag-border ${cardStyle.container}`}
                style={{ borderLeftWidth: "3px" }}
              >
                {showBadge && (
                  <div className="absolute -top-2 left-6 z-10">
                    <div
                      className={`${cardStyle.badge} px-4 py-1 text-[10px] font-medium uppercase tracking-[0.15em] whitespace-nowrap`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden lg:block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[260px_1fr_220px_180px] items-center gap-5 p-5 h-[160px]">
                    <div className="flex items-center justify-center p-4 h-full border-r border-mag-border bg-black bg-black">
                      <div className="relative h-16 w-full">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 h-full">
                      <p className="text-[10px] font-medium mb-2 uppercase tracking-[0.2em] text-mag-green">
                        BONUS DOBRODOSLICE
                      </p>
                      <h3 className="font-serif text-2xl font-bold leading-tight text-mag-black">{site.bonus}</h3>
                      {site.dopBonus && <p className="text-lg font-medium mt-1 text-mag-grey">{site.dopBonus}</p>}
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-4 h-full">
                      <div className="font-serif text-5xl font-bold mb-2 text-mag-black">{site.rating.toFixed(1)}</div>
                      <div className="flex items-center justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                      <p className="text-[10px] text-mag-grey uppercase tracking-wide">
                        ({formatNumber(site.reviews)} recenzija)
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 px-4 h-full">
                      <div
                        className={`w-full ${cardStyle.buttonPrimary} transition-colors text-mag-white font-medium py-3 px-5 text-center uppercase tracking-[0.1em] text-xs whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                      <span className="text-mag-grey hover:text-mag-green transition-colors text-xs whitespace-nowrap">
                        Posjeti stranicu
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-mag-border px-5 py-2.5 bg-mag-surface">
                    <p className="text-mag-grey text-[10px] leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti | Odgovorno kladenje | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="hidden md:block lg:hidden cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[260px_1fr] h-[180px]">
                    <div className="p-5 flex flex-col items-center justify-center h-full border-r border-mag-border bg-foreground">
                      <div className="relative h-16 w-44 mb-3">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="font-serif font-bold text-2xl text-card">{site.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col items-center justify-center bg-mag-white h-full">
                      <p className="text-mag-grey text-xs mb-3 uppercase tracking-wide">BONUS DOBRODOSLICE</p>
                      <h3 className="font-serif text-xl font-bold text-center leading-tight text-mag-black mb-2">
                        {site.bonus}
                      </h3>
                      {site.dopBonus && <p className="text-mag-grey text-sm font-medium mb-2">{site.dopBonus}</p>}
                      <div
                        className={`w-full max-w-[220px] ${cardStyle.buttonPrimary} transition-colors text-mag-white font-medium py-3 px-5 text-center uppercase tracking-[0.1em] text-xs whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className="bg-mag-surface px-5 py-2.5 border-t border-mag-border">
                    <p className="text-mag-grey text-[10px] leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti | Odgovorno kladenje | BeGambleAware.org
                    </p>
                  </div>
                </Link>

                <Link
                  href={site.url}
                  target="_blank"
                  rel="noopener referrer"
                  className="md:hidden block cursor-pointer hover:opacity-95 transition-opacity"
                >
                  <div className="grid grid-cols-[150px_1fr] gap-0 h-[170px]">
                    <div className="p-3 flex flex-col items-center justify-center h-full border-r border-mag-border bg-black bg-black">
                      <div className="relative h-14 w-full mb-2">
                        <Image src={site.logo || "/placeholder.svg"} alt={site.name} fill className="object-contain" />
                      </div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="flex gap-0.5">{renderStars(site.rating)}</div>
                        <span className="font-serif font-bold text-lg text-card">{site.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-[9px] text-center uppercase text-popover">({formatNumber(site.reviews)})</p>
                    </div>

                    <div className="p-3 flex flex-col items-center justify-between bg-mag-white h-full">
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <p className="text-mag-grey uppercase tracking-wide font-medium text-[9px] mb-1">
                          BONUS DOBRODOSLICE
                        </p>
                        <h3 className="font-serif font-bold text-center leading-tight text-xl text-mag-black mb-0.5">
                          {site.bonus}
                        </h3>
                        {site.dopBonus && <p className="text-mag-grey font-medium text-sm">{site.dopBonus}</p>}
                      </div>
                      <div
                        className={`w-full ${cardStyle.buttonPrimary} transition-colors text-mag-white font-medium py-2.5 px-3 text-center uppercase tracking-wider text-[10px] whitespace-nowrap`}
                      >
                        Registriraj se
                      </div>
                    </div>
                  </div>

                  <div className="bg-mag-surface px-3 py-2 border-t border-mag-border">
                    <p className="text-mag-grey text-[8px] leading-relaxed text-center uppercase tracking-wide">
                      18+ | Primjenjuju se uvjeti
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
