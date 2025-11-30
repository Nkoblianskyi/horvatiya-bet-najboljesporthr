"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SzhCookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-mag-white border-t border-mag-border shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-mag-charcoal leading-relaxed">
              Koristimo kolacice za poboljsanje funkcionalnosti stranice i analizu prometa.{" "}
              <Link href="/cookie-policy" className="text-mag-green hover:text-mag-terracotta font-medium underline">
                Vise informacija
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="flex-1 md:flex-none border border-mag-grey text-mag-grey hover:bg-mag-surface hover:text-mag-black bg-transparent"
            >
              Odbij
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="flex-1 md:flex-none bg-mag-green hover:bg-mag-charcoal text-mag-white"
            >
              Prihvati
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
