// src/components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-start flex-1 mb-8 md:mb-0">
            <Image
              src="/images/Logos/VYTEC.png"
              alt="Logo VYTEC'25"
              width={128}
              height={40}
              className="w-32 h-auto mb-4 hover:scale-105 transition-all duration-300"
              priority
            />
            <p className="text-white/70 hover:text-white/90 transition-colors duration-300">
              Cuộc thi Ý tưởng Sáng tạo Công nghệ
            </p>
            <p className="text-white/60 mt-2 text-sm">
              Một sân chơi sáng tạo dành cho những người trẻ mang trong mình khát vọng khởi nghiệp và đam mê công nghệ. Chương trình kết nối sinh viên toàn quốc có chung lý tưởng phát triển sản phẩm, ứng dụng khoa học công nghệ vào thực tiễn, và hiện thực hóa các ý tưởng khởi nghiệp tiềm năng.
            </p>
            <p className="text-white/60 mt-2 text-sm">
              VYTEC’25 được tổ chức bởi CLB Nguồn nhân lực HRTech phối hợp cùng Liên chi Đoàn - Liên chi Hội Khoa Điện tử Viễn thông, Trường Đại học Công nghệ – ĐHQGHN, với sứ mệnh truyền cảm hứng đổi mới sáng tạo, nuôi dưỡng tinh thần khởi nghiệp công nghệ trong thế hệ trẻ Việt Nam.
            </p>
          </div>

          {/* Liên hệ */}
          <div className="flex flex-col items-start flex-1" id="contact">
            <h4 className="text-white font-semibold mb-4 hover:text-orange-400 transition-colors duration-300">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-2 text-white/70 text-sm">
              <div className="flex items-center gap-2">
          {/* Phone Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5v2a10 10 0 0010 10h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 01-2-2V5z" />
          </svg>
          <span className="font-semibold">Hotline:</span>
          <a href="tel:0338073142" className="hover:text-white transition-colors duration-300" title="Gọi Hotline">
            0338 073 142
          </a>
              </div>
              <div className="flex items-center gap-2">
          {/* Mail Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" />
          </svg>
          <span className="font-semibold">Email:</span>
          <a href="mailto:vytec.contact@gmail.com" className="hover:text-white transition-colors duration-300" title="Gửi Email">
            vytec.contact@gmail.com
          </a>
              </div>
              <div className="flex items-center gap-2">
          {/* Zalo Icon (message square) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
          </svg>
          <span className="font-semibold">Zalo:</span>
          <a href="https://zalo.me/0338073142" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="Nhắn Zalo">
            zalo.me/0338073142
          </a>
              </div>
              <div className="flex items-center gap-2">
          {/* Facebook Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold">Facebook:</span>
          <a href="https://www.facebook.com/VYTEC.Official" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="Facebook">
            facebook.com/VYTEC.Official
          </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p className="hover:text-white/80 transition-colors duration-300">
            &copy; Vietnamese Youth TEchnopreneur Challenge - VYTEC&#39;25
          </p>
        </div>
      </div>
    </footer>
  )
}