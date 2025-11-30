import type { ReactNode } from "react"
import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"
import { SzhCookieConsent } from "@/components/szh-cookie-consent"

interface PolicyPageLayoutProps {
  children: ReactNode
  title: string
  lastUpdated?: string
}

export function PolicyPageLayout({ children, title, lastUpdated }: PolicyPageLayoutProps) {
  return (
    <>
      <SzhMainHeader />
      <main>
        <div className="relative bg-gradient-to-r from-croatia-red to-croatia-orange py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white text-center mb-2">{title}</h1>
              {lastUpdated && <p className="text-sm text-white/90 text-center">Posljednje ažuriranje: {lastUpdated}</p>}
            </div>
          </div>
        </div>

        <div className="relative min-h-screen bg-white">
          <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 md:p-8 lg:p-10">{children}</div>
          </div>
        </div>
      </main>
      <SzhMainFooter />
      <SzhCookieConsent />
    </>
  )
}
