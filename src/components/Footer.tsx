// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/images/Logos/VYTEC.png"
              alt="Logo VYTEC'25"
              width={128}
              height={40}
              className="w-32 h-auto mb-4 hover:scale-105 transition-all duration-300"
              priority
            />
            <p className="text-white/70 hover:text-white/90 transition-colors duration-300 text-lg font-medium mb-2">
              Cuộc thi Ý tưởng Sáng tạo Công nghệ
            </p>
            <p className="text-white/60 mt-2 text-sm max-w-4xl">
              Một sân chơi sáng tạo dành cho những người trẻ mang trong mình khát vọng khởi nghiệp và đam mê công nghệ. Chương trình kết nối sinh viên toàn quốc có chung lý tưởng phát triển sản phẩm, ứng dụng khoa học công nghệ vào thực tiễn, và hiện thực hóa các ý tưởng khởi nghiệp tiềm năng.
            </p>
            <p className="text-white/60 mt-2 text-sm max-w-4xl">
              VYTEC&apos;25 được tổ chức bởi CLB Nguồn nhân lực HRTech phối hợp cùng Liên chi Đoàn - Liên chi Hội Khoa Điện tử Viễn thông, Trường Đại học Công nghệ – ĐHQGHN, với sứ mệnh truyền cảm hứng đổi mới sáng tạo, nuôi dưỡng tinh thần khởi nghiệp công nghệ trong thế hệ trẻ Việt Nam.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p className="hover:text-white/80 transition-colors duration-300">
            &copy; Vietnamese Youth TEchnopreneur Challenge - VYTEC&apos;25
          </p>
        </div>
      </div>
    </footer>
  )
}