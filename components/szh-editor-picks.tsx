import type { SzhBettingSite } from "@/types/szh-betting-types"
import { SzhBettingRatings } from "@/components/szh-betting-ratings"

interface SzhEditorPicksProps {
  sites: SzhBettingSite[]
}

export function SzhEditorPicks({ sites }: SzhEditorPicksProps) {
  const topSite = sites.slice(0, 1)

  return (
    <section className="py-14 px-3 md:px-4 bg-mag-cream">
      <div className="max-w-[1400px] mx-auto bg-mag-white p-6 md:p-8 border border-mag-border">
        <div className="text-center mb-10">
          <span className="text-mag-green text-xs uppercase tracking-[0.3em] font-medium">Preporuka Redakcije</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-3 mt-2">Urednikov Izbor</h2>
          <div className="w-16 h-0.5 bg-mag-green mx-auto mb-5"></div>
          <p className="text-base text-mag-grey max-w-2xl mx-auto leading-relaxed">
            Na temelju sveobuhvatne analize svih kategorija, ova platforma istice se kombinacijom kvalitetne ponude,
            pouzdane usluge i konkurentnih kvota.
          </p>
        </div>

        <SzhBettingRatings sites={topSite} />

        <div className="text-center mt-6">
          <p className="text-xs text-mag-grey">
            Azurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  )
}
