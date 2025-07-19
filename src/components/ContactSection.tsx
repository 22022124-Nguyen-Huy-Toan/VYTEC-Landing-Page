// src/components/ContactSection.tsx
import { Card, CardContent } from "./card"
import { Phone, Mail, MessageSquare, Facebook, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#021D2F] via-[#04304A] to-[#145781]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#CAD0D2] mb-4 hover:scale-105 transition-transform duration-300">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-center text-[#CAD0D2]/70 mb-12 text-lg">
            Bạn có câu hỏi hoặc cần hỗ trợ? Đừng ngần ngại liên hệ với ban tổ chức VYTEC&apos;25!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Hotline */}
            <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="bg-[#00E0FF]/70 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] mb-2 group-hover:text-white transition-colors duration-300">
                  Hotline
                </h3>
                <a 
                  href="tel:0338073142" 
                  className="text-white/90 hover:text-white transition-colors duration-300 text-lg font-medium"
                  title="Gọi Hotline"
                >
                  0338 073 142
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-gradient-to-br from-[#1B263B]/80 to-[#415A77]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#1B263B]/90 hover:to-[#415A77]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="bg-[#00E0FF]/70 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] mb-2 group-hover:text-white transition-colors duration-300">
                  Email
                </h3>
                <a 
                  href="mailto:vytec.contact@gmail.com" 
                  className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium break-all"
                  title="Gửi Email"
                >
                  vytec.contact@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="bg-gradient-to-br from-[#778DA9]/80 to-[#2B3A55]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#778DA9]/90 hover:to-[#2B3A55]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="bg-[#00E0FF]/70 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                  <Facebook className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] mb-2 group-hover:text-white transition-colors duration-300">
                  Facebook
                </h3>
                <a 
                  href="https://www.facebook.com/VYTEC.Official" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
                  title="Facebook Page"
                >
                  VYTEC.Official
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Địa chỉ và thông tin bổ sung */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Địa chỉ */}
            <Card className="bg-gradient-to-br from-[#04304A]/80 to-[#145781]/70 border-[#3AA4C9]/50 backdrop-blur-sm hover:border-[#3AA4C9]/70 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#3AA4C9]/70 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#3AA4C9]">
                    Địa chỉ tổ chức
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  <strong>Trường Đại học Công nghệ - ĐHQGHN</strong><br />
                  Số 144 Xuân Thủy, Cầu Giấy, Hà Nội
                </p>
              </CardContent>
            </Card>

            {/* Thời gian làm việc */}
            <Card className="bg-gradient-to-br from-[#145781]/80 to-[#04304A]/70 border-[#3AA4C9]/50 backdrop-blur-sm hover:border-[#3AA4C9]/70 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#3AA4C9]/70 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#3AA4C9]">
                    Thời gian hỗ trợ
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  <strong>Thứ 2 - Thứ 6:</strong> 8:00 - 17:00<br />
                  <strong>Thứ 7:</strong> 8:00 - 12:00<br />
                  <strong>Chủ nhật:</strong> Nghỉ<br />
                  <span className="text-[#3AA4C9] font-medium">Hỗ trợ 24/7 qua Zalo & Email</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/80 text-lg hover:text-white/90 hover:scale-105 transition-all duration-300">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn trong hành trình khởi nghiệp công nghệ! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
