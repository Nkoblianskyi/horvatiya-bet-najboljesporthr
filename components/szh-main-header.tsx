"use client"
import { Logo } from "./logo"
import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"

export function SzhMainHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <header className="bg-mag-white border-b border-mag-border fixed top-0 left-0 right-0 z-50">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Logo size="md" />
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="font-medium text-mag-black border border-mag-black px-2 py-0.5 text-xs">18+</span>
              <span className="hidden md:inline text-mag-border">|</span>
              <button onClick={openModal} className="text-mag-grey hover:text-mag-green transition-colors text-sm">
                O portalu
              </button>
            </div>
          </div>
        </div>
      </div>
      <AdvertiserInfoModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  )
}
