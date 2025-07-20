// src/components/CTASection.tsx
import { Button } from "@/components/button"
import { Rocket, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 hover:scale-105 transition-transform duration-300 leading-tight">
            Sẵn sàng bắt đầu hành trình?
          </h2>
          <p className="inline-block text-lg md:text-xl text-white/80 mb-6 md:mb-8 hover:text-white/90 transition-colors duration-300 leading-relaxed whitespace-nowrap">
          Tham gia VYTEC&#39;25 ngay hôm nay và biến ý tưởng công nghệ của bạn thành hiện thực!
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 
                     px-8 py-4 md:px-12 md:py-6 
                     text-lg md:text-xl font-bold 
                     rounded-full hover:scale-105 md:hover:scale-110 
                     hover:shadow-xl md:hover:shadow-2xl 
                     transition-all duration-300 group
                     w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
          >
            <Rocket className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm sm:text-base md:text-xl">ĐĂNG KÝ THAM GIA NGAY</span>
            <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}