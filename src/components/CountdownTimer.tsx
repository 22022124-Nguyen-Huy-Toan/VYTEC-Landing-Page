// src/components/CountdownTimer.tsx
'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date("2025-08-29T20:00:00+07:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
        <div className="flex space-x-4 text-center">
          <div className="flex flex-col hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-white">{timeLeft.days}</span>
            <span className="text-sm text-white/70">Ngày</span>
          </div>
          <div className="text-white/50 text-2xl">:</div>
          <div className="flex flex-col hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-white">{timeLeft.hours}</span>
            <span className="text-sm text-white/70">Giờ</span>
          </div>
          <div className="text-white/50 text-2xl">:</div>
          <div className="flex flex-col hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-white">{timeLeft.minutes}</span>
            <span className="text-sm text-white/70">Phút</span>
          </div>
          <div className="text-white/50 text-2xl">:</div>
          <div className="flex flex-col hover:scale-110 transition-transform duration-300">
            <span className="text-3xl font-bold text-white">{timeLeft.seconds}</span>
            <span className="text-sm text-white/70">Giây</span>
          </div>
        </div>
      </div>
    </div>
  )
}