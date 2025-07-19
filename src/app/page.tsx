// src/app/page.tsx
import React from 'react';
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import TimelineSection from '@/components/TimelineSection'
import PrizesSection from '@/components/PrizesSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#021D2F]">
      {/* Header fixe */}
      <Header />
      
      {/* Hero Section avec video background - pleine hauteur */}
      <div className="relative">
        <HeroSection />
      </div>
      
      {/* Sections de contenu - séparées du hero */}
      <div className="relative z-10 bg-gradient-to-br from-[#021D2F] via-[#04304A] to-[#145781]">
        {/* <AboutSection /> */}
        <TimelineSection />
        <PrizesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}