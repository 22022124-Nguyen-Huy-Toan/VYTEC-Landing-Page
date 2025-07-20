// src/components/TimelineSection.tsx
import { Card, CardContent } from "@/components/card"
import { Badge } from "@/components/badge"

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-10 lg:mb-12 hover:scale-105 transition-transform duration-300">
            Hành trình VYTEC&#39;25
          </h2>

            <div className="relative">
            {/* Timeline Line - Mobile: left positioned, Desktop: center */}
            <div className="absolute left-6 sm:left-1/2 sm:transform sm:-translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-[#00E0FF]/70 to-[#2B3A55]/80 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {/* Timeline Item 1 */}
              <div className="flex items-start sm:items-center group">
              {/* Mobile Layout */}
              <div className="flex sm:hidden w-full">
                <div className="relative z-10 w-3 h-3 bg-[#00E0FF] rounded-full border-2 border-white mr-4 mt-2 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 flex-shrink-0"></div>
                <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 flex-1">
                  <CardContent className="p-4">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300 text-xs">
                    Thời gian dự kiến: 23/08/2025 - 05/09/2025
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 1: Vòng đơn
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-sm text-justify whitespace-pre-line leading-relaxed">
                    <span className="font-bold">Hình thức:</span> Online{"\n"}
                    <span className="font-bold">Đăng ký cá nhân:</span> Các cá nhân có nhu cầu tham gia đăng ký theo form của BTC và được add vào group ghép đội VYTEC&#39;25{"\n"}
                    <span className="font-bold">Đăng ký theo đội:</span> Thí sinh dự thi theo nhóm từ 3 - 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.
                    </p>
                  </CardContent>
                </Card>
              </div>
              {/* Desktop Layout */}
              <div className="hidden sm:flex sm:items-center sm:w-full">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300">
                    Thời gian dự kiến: 23/08/2025 - 05/09/2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 1: Vòng đơn
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-justify whitespace-pre-line">
                    <span className="font-bold">Hình thức:</span> Online{"\n"}
                    <span className="font-bold">Đăng ký cá nhân:</span> Các cá nhân có nhu cầu tham gia đăng ký theo form của BTC và được add vào group ghép đội VYTEC&#39;25{"\n"}
                    <span className="font-bold">Đăng ký theo đội:</span> Thí sinh dự thi theo nhóm từ 3 - 5 thành viên, các thành viên đều phải đang còn là sinh viên hoặc mới ra trường không quá một năm.
                    </p>
                  </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 w-4 h-4 bg-[#00E0FF] rounded-full border-4 border-white group-hover:scale-150 group-hover:shadow-lg transition-all duration-300"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-start sm:items-center group">
              {/* Mobile Layout */}
              <div className="flex sm:hidden w-full">
                <div className="relative z-10 w-3 h-3 bg-[#00E0FF] rounded-full border-2 border-white mr-4 mt-2 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 flex-shrink-0"></div>
                <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 flex-1">
                  <CardContent className="p-4">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300 text-xs">
                    Thời gian dự kiến: 07/09/2025 - 16/09/2025
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 2: Vòng loại
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-sm text-justify whitespace-pre-line leading-relaxed">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Mục tiêu:</span> Vòng loại nhằm đánh giá khả năng triển khai ý tưởng kinh doanh dựa trên công nghệ thông qua kế hoạch tiếp cận thị trường và khách hàng. Ngoài ra, vòng loại còn đánh giá mức độ tham gia tích cực của các thành viên trong nhóm thông qua các buổi đào tạo (training).{"\n"}
                    <span className="font-bold italic">10 Đội đáp ứng hoàn thiện nhất các tiêu chí trên sẽ được lọt vào Vòng 3 - Vòng Bán kết.</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              {/* Desktop Layout */}
              <div className="hidden sm:flex sm:items-center sm:w-full">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-[#00E0FF] rounded-full border-4 border-white group-hover:scale-150 group-hover:shadow-lg transition-all duration-300"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300">
                    Thời gian dự kiến: 07/09/2025 - 16/09/2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 2: Vòng loại
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-justify whitespace-pre-line">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Mục tiêu:</span> Vòng loại nhằm đánh giá khả năng triển khai ý tưởng kinh doanh dựa trên công nghệ thông qua kế hoạch tiếp cận thị trường và khách hàng. Ngoài ra, vòng loại còn đánh giá mức độ tham gia tích cực của các thành viên trong nhóm thông qua các buổi đào tạo (training).{"\n"}
                    <span className="font-bold italic">10 Đội đáp ứng hoàn thiện nhất các tiêu chí trên sẽ được lọt vào Vòng 3 - Vòng Bán kết.</span>
                    </p>
                  </CardContent>
                  </Card>
                </div>
              </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="flex items-start sm:items-center group">
              {/* Mobile Layout */}
              <div className="flex sm:hidden w-full">
                <div className="relative z-10 w-3 h-3 bg-[#00E0FF] rounded-full border-2 border-white mr-4 mt-2 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 flex-shrink-0"></div>
                <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 flex-1">
                  <CardContent className="p-4">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300 text-xs">
                    Thời gian dự kiến: 28/09/2025
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 3: Vòng Bán kết
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-sm text-justify whitespace-pre-line leading-relaxed">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Thể lệ:</span>
                    {"\n"}
                    <span className="block pl-2">- Mỗi đội thi sẽ có 12 phút cho sản phẩm của mình, bao gồm:</span>
                    <span className="block pl-4">+ 7 phút trình bày sản phẩm.</span>
                    <span className="block pl-4">+ 5 phút trả lời câu hỏi từ Ban Giám khảo về sản phẩm của mình.</span>
                    <span className="block pl-2">- Lưu ý: Các đội thi phải dừng tất cả phần trình bày khi quỹ thời gian kết thúc.</span>
                    <span className="font-bold italic block mt-2">5 Đội xuất sắc nhất sẽ được chọn vào Vòng 4 - Vòng Chung kết.</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              {/* Desktop Layout */}
              <div className="hidden sm:flex sm:items-center sm:w-full">
                <div className="w-1/2 pr-8 text-right">
                  <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300">
                    Thời gian dự kiến: 28/09/2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 3: Vòng Bán kết
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-justify whitespace-pre-line">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Thể lệ:</span>
                    {"\n"}
                    <span className="block pl-4">- Mỗi đội thi sẽ có 12 phút cho sản phẩm của mình, bao gồm:</span>
                    <span className="block pl-8">+ 7 phút trình bày sản phẩm.</span>
                    <span className="block pl-8">+ 5 phút trả lời câu hỏi từ Ban Giám khảo về sản phẩm của mình.</span>
                    <span className="block pl-4">- Lưu ý: Các đội thi phải dừng tất cả phần trình bày khi quỹ thời gian kết thúc.</span>
                    <span className="font-bold italic block mt-2">5 Đội xuất sắc nhất sẽ được chọn vào Vòng 4 - Vòng Chung kết.</span>
                    </p>
                  </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 w-4 h-4 bg-[#00E0FF] rounded-full border-4 border-white group-hover:scale-150 group-hover:shadow-lg transition-all duration-300"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="flex items-start sm:items-center group">
              {/* Mobile Layout */}
              <div className="flex sm:hidden w-full">
                <div className="relative z-10 w-3 h-3 bg-[#00E0FF] rounded-full border-2 border-white mr-4 mt-2 group-hover:scale-150 group-hover:shadow-lg transition-all duration-300 flex-shrink-0"></div>
                <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500 flex-1">
                  <CardContent className="p-4">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300 text-xs">
                    Thời gian dự kiến: 12/10/2025
                    </Badge>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 4: Vòng Chung kết
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-sm text-justify whitespace-pre-line leading-relaxed">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Thể lệ:</span> Vòng Chung kết gồm 3 phần thi: {"\n"}
                    <span className="block pl-2 font-bold">
                      - Phần 1: <span className="font-normal">Thuyết trình về kế hoạch kinh doanh và kêu gọi hỗ trợ đầu tư từ Hội đồng Nhà đầu tư.</span>
                    </span>
                    <span className="block pl-2 font-bold">
                      - Phần 2: <span className="font-normal">Trả lời câu hỏi tình huống.</span>
                    </span>
                    <span className="block pl-2 font-bold">
                      - Phần 3: <span className="font-normal">Tranh biện.</span>
                    </span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              {/* Desktop Layout */}
              <div className="hidden sm:flex sm:items-center sm:w-full">
                <div className="w-1/2 pr-8"></div>
                <div className="relative z-10 w-4 h-4 bg-[#00E0FF] rounded-full border-4 border-white group-hover:scale-150 group-hover:shadow-lg transition-all duration-300"></div>
                <div className="w-1/2 pl-8">
                  <Card className="bg-gradient-to-br from-[#2B3A55]/80 to-[#1B263B]/70 border-[#00E0FF]/70 backdrop-blur-sm hover:from-[#2B3A55]/90 hover:to-[#1B263B]/90 hover:border-[#00E0FF]/90 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-4 sm:p-6">
                    <Badge className="mb-3 bg-[#00E0FF]/20 text-[#00E0FF] border-[#00E0FF]/30 hover:bg-[#00E0FF]/30 hover:border-[#00E0FF]/50 transition-all duration-300">
                    Thời gian dự kiến: 12/10/2025
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00E0FF] transition-colors duration-300">
                    Vòng 4: Vòng Chung kết
                    </h3>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300 text-justify whitespace-pre-line">
                    <span className="font-bold">Hình thức:</span> Offline{"\n"}
                    <span className="font-bold">Thể lệ:</span> Vòng Chung kết gồm 3 phần thi: {"\n"}
                    <span className="block pl-4 font-bold">
                      - Phần 1: <span className="font-normal">Thuyết trình về kế hoạch kinh doanh và kêu gọi hỗ trợ đầu tư từ Hội đồng Nhà đầu tư.</span>
                    </span>
                    <span className="block pl-4 font-bold">
                      - Phần 2: <span className="font-normal">Trả lời câu hỏi tình huống.</span>
                    </span>
                    <span className="block pl-4 font-bold">
                      - Phần 3: <span className="font-normal">Tranh biện.</span>
                    </span>
                    </p>
                  </CardContent>
                  </Card>
                </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}