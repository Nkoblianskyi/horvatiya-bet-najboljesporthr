"use client"

import { bettingSitesHR } from "@/types/szh-betting-types"
import { SzhHeroBanner } from "@/components/szh-hero-banner"
import { SzhBettingRatings } from "@/components/szh-betting-ratings"
import { SzhReviewMethodology } from "@/components/szh-review-methodology"
import { SzhOffersDialog } from "@/components/szh-offers-dialog"
import { SzhEditorPicks } from "@/components/szh-editor-picks"
import { SzhAboutUs } from "@/components/szh-about-us"
import { SzhResponsibleGaming } from "@/components/szh-responsible-gaming"
import { SzhFaq } from "@/components/szh-faq"
import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"

export default function StranicaZakladenjeHR() {
  return (
    <div className="min-h-screen bg-mag-cream">
      <SzhMainHeader />
      <main className="max-w-[1400px] mx-auto">
        <SzhHeroBanner />
        <SzhBettingRatings sites={bettingSitesHR} />
        <SzhAboutUs />
        <SzhResponsibleGaming />
        <SzhReviewMethodology />
        <SzhEditorPicks sites={bettingSitesHR} />
        <SzhFaq />
      </main>
      <SzhMainFooter />
      <SzhOffersDialog sites={bettingSitesHR} />
    </div>
  )
}
