'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logos/VYTEC.png"
              alt="Logo VYTEC 2025"
              width={120} 
              height={40}
              className="h-10 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-[#CAD0D2]/90">
            <button 
              onClick={() => handleNavClick('about')}
              className="hover:text-[#3AA4C9] hover:scale-105 transition-all duration-300 relative group py-2"
            >
              Giới thiệu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3AA4C9] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => handleNavClick('timeline')}
              className="hover:text-[#3AA4C9] hover:scale-105 transition-all duration-300 relative group py-2"
            >
              Lịch trình
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3AA4C9] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => handleNavClick('prizes')}
              className="hover:text-[#3AA4C9] hover:scale-105 transition-all duration-300 relative group py-2"
            >
              Giải thưởng
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3AA4C9] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => handleNavClick('rules')}
              className="hover:text-[#3AA4C9] hover:scale-105 transition-all duration-300 relative group py-2"
            >
              Thể lệ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3AA4C9] group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#CAD0D2] p-2 hover:bg-[#3AA4C9]/20 hover:scale-110 rounded-md transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#04304A]/90 backdrop-blur-sm rounded-lg p-4 border border-[#3AA4C9]/30">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavClick('about')}
                className="text-[#CAD0D2]/90 hover:text-[#3AA4C9] hover:bg-[#3AA4C9]/20 hover:scale-105 transition-all duration-300 py-3 px-3 rounded-md text-left"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => handleNavClick('timeline')}
                className="text-[#CAD0D2]/90 hover:text-[#3AA4C9] hover:bg-[#3AA4C9]/20 hover:scale-105 transition-all duration-300 py-3 px-3 rounded-md text-left"
              >
                Lịch trình
              </button>
              <button 
                onClick={() => handleNavClick('prizes')}
                className="text-[#CAD0D2]/90 hover:text-[#3AA4C9] hover:bg-[#3AA4C9]/20 hover:scale-105 transition-all duration-300 py-3 px-3 rounded-md text-left"
              >
                Giải thưởng
              </button>
              <button 
                onClick={() => handleNavClick('rules')}
                className="text-[#CAD0D2]/90 hover:text-[#3AA4C9] hover:bg-[#3AA4C9]/20 hover:scale-105 transition-all duration-300 py-3 px-3 rounded-md text-left"
              >
                Thể lệ
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}