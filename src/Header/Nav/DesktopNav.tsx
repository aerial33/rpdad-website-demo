'use client'

// Importing required types and components
import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import type { Header as HeaderType } from '@/payload-types'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { ArrowRight, ChevronDownIcon, PhoneCall, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Desktop navigation component that takes header data as prop
export const DesktopNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  // State to track which dropdown menu is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  // Get navigation items from header data
  const navItems = data?.tabs || []

  return (
    // Main container - hidden on mobile, flex on large screens
    <div className="hidden w-1/2 justify-between gap-6 lg:flex">
      {/* Navigation menu */}
      <nav className="flex gap-6 items-center text-current">
        {navItems.map((tab, index) => {
          const { enableDirectLink, enableDropdown } = tab

          // Handle direct links
          if (enableDirectLink && tab.link) {
            return (
              <div
                key={index}
                className="relative h-fit w-fit"
                onMouseEnter={() => setOpenIndex(null)}
              >
                {/* Direct link with hover effects */}
                <CMSLink
                  {...tab.link}
                  label={tab.label}
                  appearance="link"
                  className="relative text-current text-lg font-semibold hover:underline-offset-8 hover:text-primary transition-all"
                />

                {/* Animated underline indicator */}
                <motion.span
                  className="absolute -bottom-2 -left-2 -right-2 h-1  origin-left border border-red-500 rounded-full bg-indigo-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: openIndex === index ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )
          }

          // Handle dropdown menus
          if (enableDropdown) {
            return (
              <div
                key={index}
                className="relative h-fit w-fit"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {/* Dropdown trigger button */}
                <button className="flex items-center gap-1 text-current text-base hover:underline-offset-4 hover:text-primary focus:outline-none">
                  {tab.label}
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Animated dropdown menu */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      style={{ translateX: '-50%' }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 bg-blue-100 rounded-lg p-6"
                    >
                      {/* Dropdown arrow */}
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-100" />

                      <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
                        <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
                          <div>
                            <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
                            <p className="mb-6 max-w-xs text-sm text-neutral-400">
                              Placeholder is the world/s leading placeholder company.
                            </p>
                          </div>
                          <a
                            href="#"
                            className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
                          >
                            Learn more <ArrowRight />
                          </a>
                        </div>
                        <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-slate-400 p-6 lg:col-span-8">
                          <a
                            href="#"
                            className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                          >
                            <h3 className="mb-1 font-semibold">Features</h3>
                            <p className="text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                            </p>
                          </a>
                          <a
                            href="#"
                            className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                          >
                            <h3 className="mb-1 font-semibold">Testimonials</h3>
                            <p className="text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                            </p>
                          </a>
                          <a
                            href="#"
                            className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                          >
                            <h3 className="mb-1 font-semibold">Press</h3>
                            <p className="text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                            </p>
                          </a>
                          <a
                            href="#"
                            className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                          >
                            <h3 className="mb-1 font-semibold">Blog</h3>
                            <p className="text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam?
                            </p>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          }

          return null
        })}
      </nav>

      {/* Right side buttons - phone and search */}
      <div className="flex items-center gap-4">
        <Button size="default">
          <PhoneCall className="w-4 h-4 mr-2" />
          05 40 12 90 10
        </Button>
        <Link href="/search" className="flex items-center hover:opacity-75 transition-opacity">
          <SearchIcon className="w-5 h-5 text-current" />
        </Link>
      </div>
    </div>
  )
}
