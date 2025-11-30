import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

export function SzhMainFooter() {
  return (
    <footer className="bg-mag-white border-t border-mag-border relative z-10">
      <div className="container mx-auto px-4 max-w-[1400px] py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo size="md" />
            </div>
            <p className="text-mag-grey leading-relaxed text-sm">
              Nezavisna sportska redakcija s fokusom na objektivne analize i ocjene platformi za kladenje u Hrvatskoj.
            </p>
          </div>

          <div>
            <h3 className="text-mag-black font-medium mb-4 text-xs uppercase tracking-[0.2em]">Navigacija</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-mag-grey hover:text-mag-green transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-mag-green"></span>
                  Pocetna
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-mag-grey hover:text-mag-green transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-mag-green"></span>O Redakciji
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-mag-black font-medium mb-4 text-xs uppercase tracking-[0.2em]">Pravne Informacije</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-mag-grey hover:text-mag-green transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-mag-green"></span>
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-mag-grey hover:text-mag-green transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-mag-green"></span>
                  Politika Kolacica
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mag-border pt-8 mb-8">
          <div className="bg-mag-surface border border-mag-border p-5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-10 h-10 bg-mag-charcoal flex items-center justify-center">
                  <span className="text-mag-white text-sm font-bold">18+</span>
                </div>
                <div>
                  <h4 className="text-mag-black font-medium text-sm">Odgovorno Kladenje</h4>
                  <p className="text-xs text-mag-grey">Samo za punoljetne osobe</p>
                </div>
              </div>
              <p className="text-sm text-mag-grey leading-relaxed">
                Kladenje moze uzrokovati ovisnost. Za strucnu pomoc posjetite{" "}
                <Link href="https://www.hupis.hr/klok" className="text-mag-green hover:text-mag-terracotta font-medium">
                  HUPIS
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-mag-border pt-8 mb-8">
          <div className="bg-mag-white border border-mag-border p-5 md:p-6">
            <h4 className="text-center text-xs uppercase tracking-[0.2em] text-mag-black mb-5 font-medium">
              Partneri za Odgovorno Kladenje
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/hupis.png" alt="HUPIS" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:grayscale-0 transition-all hover:scale-105"
              >
                <div className="relative w-[120px] h-[80px] bg-mag-white border border-mag-border p-1.5">
                  <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-mag-border pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-mag-grey text-center md:text-left">
              {new Date().getFullYear()} najboljesporthr.com. Sva prava pridrzana.
            </p>
            <p className="text-xs text-mag-grey text-center md:text-right">Nezavisna sportska analitika</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
