// src/components/HeroSection.tsx
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Rocket, Clock } from "lucide-react"
import CountdownTimer from "./CountdownTimer"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/images/bgr_vid.mp4" type="video/mp4" />
        <source src="/images/bgr_vid.webm" type="video/webm" />
      </video>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021D2F]/80 via-[#04304A]/60 to-[#145781]/70 z-10" />
      
      {/* Hero Content */}
      <section className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-[#3AA4C9] to-[#145781] text-white border-0 px-4 py-2 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Cuộc thi Ý tưởng Sáng tạo Công nghệ 2025
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#CAD0D2] via-[#3AA4C9] to-[#145781] bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-500">
              VYTEC&apos;25
            </h1>

            <p className="text-xl md:text-2xl text-[#CAD0D2]/90 mb-4 font-medium hover:text-[#CAD0D2] transition-colors duration-300">
              Vietnamese Youth TEchnopreneur Challenge
            </p>

            <p className="text-lg text-[#CAD0D2]/70 mb-8 italic hover:text-[#CAD0D2]/90 transition-colors duration-300">
              &quot;Hành trình bừng sáng ý tưởng công nghệ&quot;
            </p>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3AA4C9] to-[#145781] hover:from-[#145781] hover:to-[#021D2F] text-white border-0 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                ĐĂNG KÝ NGAY
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#CAD0D2]/30 text-[#CAD0D2] hover:bg-[#3AA4C9]/20 hover:border-[#CAD0D2]/50 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-full bg-transparent hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1eXucYW1biRTN5l0y7vZHIAMPYTpzjONT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  XEM THỂ LỆ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}