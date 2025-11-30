import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl"

  return (
    <Link href="/" className={`flex items-center hover:opacity-90 transition-opacity ${className}`}>
      <Image src="/favicon.ico" alt="Najbolje Sport" width={40} height={40} />
      <div className="flex flex-col leading-none">
        <span className={`${textSize} font-serif font-bold text-mag-black tracking-tight`}>
          Najbolje<span className="text-mag-green">Sport</span>
        </span>
        <span className="text-[10px] text-mag-grey uppercase tracking-[0.25em] mt-0.5 font-sans">Hrvatska</span>
      </div>
    </Link>
  )
}
