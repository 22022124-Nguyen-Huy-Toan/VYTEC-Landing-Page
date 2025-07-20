// src/components/ui/AboutSection.tsx
import { Card, CardContent } from "@/components/card"
import { Flame, GraduationCap, Rocket } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#CAD0D2] mb-12 hover:scale-105 transition-transform duration-300 opacity-100">
            VYTEC&#39;25 – Đánh thức tiềm năng, bứt phá ý tưởng
            </h2>
            <p className="text-[#CAD0D2] text-lg mb-4 text-justify opacity-100">
            Bản sắc không phải thứ sẵn có – mà là hành trình bạn tự mình khám phá. Đến với VYTEC&#39;25, mỗi bạn trẻ là một nguồn sáng tiềm năng đang chờ được khai mở thông qua đam mê, tinh thần sáng tạo và ứng dụng công nghệ. Đây không chỉ là một cuộc thi, mà là hành trình bạn dám bước đi, dám trải nghiệm, để trở thành phiên bản ý nghĩa và sắc nét nhất của chính mình.
            </p>
            <p className="text-[#CAD0D2] text-base mb-4 text-justify opacity-100">
            Cuộc thi Ý tưởng Sáng tạo Công nghệ - VYTEC&#39;25 do CLB Nguồn nhân lực HRTech phối hợp cùng 
            Liên chi Đoàn – Liên chi Hội Khoa Điện tử Viễn thông, Trường Đại học Công nghệ – ĐHQGHN đồng tổ chức. 
            Cuộc thi dành cho các bạn sinh viên toàn quốc với mục tiêu khơi dậy tinh thần sáng tạo, đam mê khoa học công nghệ và thúc đẩy tinh thần khởi nghiệp trong giới trẻ.
            </p>
            <p className="text-[#CAD0D2] text-base mb-8 text-justify opacity-100">
            Cuộc thi không chỉ là nơi để thi đấu – mà là một hành trình toàn diện giúp bạn phát triển từ bên trong và bứt phá ra bên ngoài.
            </p>
          
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#00E0FF]/70 p-3 rounded-full group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300">
                  <Flame className="h-6 w-6 text-[#00E0FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] group-hover:text-white transition-colors duration-300">
                  Bắt đầu từ đam mê – Không cần chờ &quot;hoàn hảo&quot;
                </h3>
                </div>
                <p className="text-white leading-relaxed">
                Bạn không cần có sẵn một sản phẩm hoàn chỉnh – chỉ cần mang theo nhiệt huyết và tinh thần học hỏi. 
                VYTEC&#39;25 là môi trường khởi đầu lý tưởng để bạn khám phá chính mình, xác định đích đến và nuôi dưỡng đam mê công nghệ từ những bước đi đầu tiên.
                </p>
              </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#1B263B]/80 to-[#415A77]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#1B263B]/90 hover:to-[#415A77]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#00E0FF]/70 p-3 rounded-full group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-[#00E0FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] group-hover:text-white transition-colors duration-300">
                  Phát triển Kỹ năng
                </h3>
                </div>
                <p className="text-white leading-relaxed">
                Không chỉ thi, bạn sẽ được tham gia 4 buổi đào tạo chuyên sâu từ các mentor giàu kinh nghiệm trong lĩnh vực công nghệ và khởi nghiệp. 
                Qua mỗi vòng thi, bạn sẽ tích lũy thêm kiến thức thực tiễn, kỹ năng lãnh đạo, tư duy đổi mới và khả năng làm việc nhóm hiệu quả.
                </p>
              </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#415A77]/80 to-[#778DA9]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#415A77]/90 hover:to-[#778DA9]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#00E0FF]/70 p-3 rounded-full group-hover:bg-[#00E0FF]/90 group-hover:scale-110 transition-all duration-300">
                  <Rocket className="h-6 w-6 text-[#00E0FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#00E0FF] group-hover:text-white transition-colors duration-300">
                  Bứt phá ý tưởng – Chạm tới tương lai
                </h3>
                </div>
                <p className="text-white leading-relaxed">
                Thông qua việc hiện thực hóa ý tưởng thành đề án, bạn có cơ hội tiếp xúc với doanh nghiệp, 
                mở rộng mạng lưới kết nối, và tích lũy kinh nghiệm thực chiến. 
                Đây chính là nền tảng vững chắc cho hành trình khởi nghiệp hoặc phát triển sản phẩm công nghệ trong tương lai.
                </p>
              </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  )
}
