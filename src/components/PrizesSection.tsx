// src/components/PrizesSection.tsx
import { Card, CardContent } from "./card"
import { Trophy } from "lucide-react"

export default function PrizesSection() {
  return (
    <section id="prizes" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 hover:scale-105 transition-transform duration-300">
        Cơ cấu giải thưởng
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
        {/* First Prize */}
        <Card className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30 backdrop-blur-sm relative overflow-hidden hover:from-yellow-500/30 hover:to-orange-500/30 hover:border-yellow-500/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black px-3 py-1 text-sm font-bold rounded-bl-lg group-hover:bg-yellow-400 transition-colors duration-300">
            QUÁN QUÂN
          </div>
          <CardContent className="p-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-yellow-300 transition-all duration-300" />
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
          Giải Nhất
            </h3>
            <div className="text-lg font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 group-hover:scale-105 transition-all duration-300">
          5.000.000 VNĐ<br />
          Giấy chứng nhận và kỷ niệm chương
            </div>
          </CardContent>
        </Card>

        {/* Second Prize */}
        <Card className="bg-gradient-to-br from-gray-400/20 to-gray-600/20 border-gray-400/30 backdrop-blur-sm relative overflow-hidden hover:from-gray-400/30 hover:to-gray-600/30 hover:border-gray-400/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
          <div className="absolute top-0 right-0 bg-gray-400 text-black px-3 py-1 text-sm font-bold rounded-bl-lg group-hover:bg-gray-300 transition-colors duration-300">
            Á QUÂN
          </div>
          <CardContent className="p-8 text-center">
            <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-gray-200 transition-all duration-300" />
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
          Giải Nhì
            </h3>
            <div className="text-lg font-bold text-gray-300 mb-4 group-hover:text-gray-200 group-hover:scale-105 transition-all duration-300">
          3.000.000 VNĐ<br />
          Giấy chứng nhận và kỷ niệm chương
            </div>
          </CardContent>
        </Card>

        {/* Third Prize */}
        <Card className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-orange-600/30 backdrop-blur-sm relative overflow-hidden hover:from-orange-600/30 hover:to-red-600/30 hover:border-orange-600/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
          <div className="absolute top-0 right-0 bg-orange-600 text-black px-3 py-1 text-sm font-bold rounded-bl-lg group-hover:bg-orange-500 transition-colors duration-300">
            QUÝ QUÂN
          </div>
          <CardContent className="p-8 text-center">
            <Trophy className="h-16 w-16 text-orange-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-orange-300 transition-all duration-300" />
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
          Giải Ba
            </h3>
            <div className="text-lg font-bold text-orange-400 mb-4 group-hover:text-orange-300 group-hover:scale-105 transition-all duration-300">
          2.000.000 VNĐ<br />
          Giấy chứng nhận và kỷ niệm chương
            </div>
          </CardContent>
        </Card>
          </div>
          {/* Khuyến khích & Đội thi được yêu thích nhất */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Khuyến khích */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-blue-500/30 backdrop-blur-sm relative overflow-hidden hover:from-blue-500/30 hover:to-blue-700/30 hover:border-blue-500/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <Trophy className="h-16 w-16 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Giải Khuyến khích (02 giải)
                </h3>
                <div className="text-lg font-bold text-blue-400 mb-4 group-hover:text-blue-300 group-hover:scale-105 transition-all duration-300">
                  1.000.000 VNĐ<br />
                  Giấy chứng nhận và kỷ niệm chương
                </div>
              </CardContent>
            </Card>

            {/* Đội thi được yêu thích nhất */}
            <Card className="bg-gradient-to-br from-pink-500/20 to-purple-700/20 border-pink-500/30 backdrop-blur-sm relative overflow-hidden hover:from-pink-500/30 hover:to-purple-700/30 hover:border-pink-500/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <Trophy className="h-16 w-16 text-pink-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:text-pink-300 transition-all duration-300" />
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  Giải Đội thi được yêu thích nhất
                </h3>
                <div className="text-lg font-bold text-pink-400 mb-4 group-hover:text-pink-300 group-hover:scale-105 transition-all duration-300">
                  1.000.000 VNĐ<br />
                  Giấy chứng nhận và kỷ niệm chương
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
        <p className="text-white/80 text-lg hover:text-white/90 hover:scale-105 transition-all duration-300">
          Tổng giá trị giải thưởng lên đến <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300">13.000.000 VNĐ</span>
        </p>
          </div>
        </div>
      </div>
    </section>
  )
}