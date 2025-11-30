"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[600px] p-0 bg-mag-white overflow-hidden border border-mag-border">
        <div className="relative bg-mag-green px-6 py-4">
          <DialogHeader>
            <DialogTitle className="text-xl text-mag-white font-serif font-bold">O Portalu</DialogTitle>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 space-y-5 max-h-[70vh] overflow-y-auto">
          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-mag-black border-l-2 border-mag-green pl-3">
              O NajboljeSport HR
            </h3>
            <div className="space-y-2 text-mag-grey text-sm leading-relaxed">
              <p>
                NajboljeSport HR je nezavisna redakcija specijalizirana za analizu i ocjenjivanje platformi za sportsko
                kladenje u Hrvatskoj. Cilj nam je pruziti objektivne informacije za donosenje informiranih odluka.
              </p>
              <p>
                Dio prikazanih platformi su nasi komercijalni partneri, sto moze utjecati na redoslijed prikaza.
                Medutim, urednicke ocjene temelje se iskljucivo na definiranim kriterijima kvalitete.
              </p>
              <p>
                Sve navedene platforme posjeduju vazece dozvole za rad u Republici Hrvatskoj. Preporucujemo provjeru
                aktualnih informacija na sluzbenim stranicama operatera.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif font-bold text-lg text-mag-black border-l-2 border-mag-terracotta pl-3">
              Informirano Kladenje
            </h3>
            <div className="space-y-2 text-mag-grey text-sm leading-relaxed">
              <p>
                Sadrzaj ovog portala namijenjen je iskljucivo punoljetnim osobama. Sportsko kladenje moze biti oblik
                zabave uz odgovarajuci pristup i kontrolu.
              </p>
              <p>
                Kladenje ne bi trebalo tretirati kao izvor prihoda. Koristite samo sredstva ciji gubitak ne utjece na
                vase svakodnevne financijske obveze.
              </p>
              <p>
                Ako primijetite znakove problematicnog ponasanja vezanog uz kladenje, obratite se specijaliziranim
                sluzbama za pomoc.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-mag-border">
            <button
              onClick={onClose}
              className="w-full bg-mag-green hover:bg-mag-charcoal text-mag-white font-medium py-3 px-6 transition-colors text-sm"
            >
              Razumijem
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
