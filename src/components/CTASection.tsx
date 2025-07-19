// src/components/CTASection.tsx
import { Button } from "@/components/button"
import { Rocket, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            Sẵn sàng bắt đầu hành trình?
          </h2>
            <p className="text-xl text-white/80 mb-8 hover:text-white/90 transition-colors duration-300 whitespace-nowrap">
            Tham gia VYTEC&#39;25 ngay hôm nay và biến ý tưởng công nghệ của bạn thành hiện thực!
            </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white border-0 px-12 py-6 text-xl font-bold rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
          >
            <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            ĐĂNG KÝ THAM GIA NGAY
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}