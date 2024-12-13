import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import localFont from "next/font/local";



const carolineFont = localFont({
  src: '../../app/fonts/Caroline.woff',
  display: 'swap',
});



export default function HeroSection() {
  return (
    <div className="relative h-[45vh] md:h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/header2.png"
          alt="Leroy Oxygene "
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z- flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-serif text-4xl font-light tracking-wider text-white sm:text-5xl md:text-6xl">
            
          <span  className={carolineFont.className}>  Leroy X oxygene Shop</span>
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Discover our collection of luxury products
          </p>
          <Link href="/products">
           <Button 
            className="mt-8 bg-white/90 px-8 py-6 text-lg font-light tracking-wider text-gray-900 hover:bg-white"
          >
            Explore Products
          </Button>
          </Link>
         
        </div>
      </div>
    </div>
  )
}

