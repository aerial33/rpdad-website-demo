'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { FullLogo } from '@/graphics/FullLogo'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { DesktopNav } from './DesktopNav/DesktopNav'
import { MobileNav } from './MobileNav/MobileNav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 150 ? true : false)
  })

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 text-black transition-all duration-300 ease-out lg:px-12 ${
        scrolled ? 'bg-white py-3 shadow-xl' : 'py-6 shadow-none'
      }`}
    >
      <div className="mx-auto flex max-w-7xl py-4 items-center justify-between text-current">
        <Link href="/">
          <FullLogo />
        </Link>
        <DesktopNav data={data} />
        <MobileNav data={data} />
      </div>
    </header>
  )
}
