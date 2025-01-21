'use client'

// import { Dispatch, SetStateAction, useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

// import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'

export const DesktopNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.tabs || []

  return (
    <div className="hidden lg:flex items-center justify-between w-1/2">
      <nav className="flex gap-3 items-center text-current">
        {navItems.map((tab, i) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { enableDirectLink = false, enableDropdown = false } = tab
          return (
            <CMSLink
              key={i}
              {...tab.link}
              label={tab.label}
              appearance="link"
              newTab={tab.link?.newTab}
              className="text-current text-base"
            />
          )
        })}
      </nav>
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-current" />
      </Link>
    </div>
  )
}
