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
                  className="relative text-current text-base font-semibold hover:underline-offset-8 hover:text-primary transition-all"
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
                <button
                  aria-expanded={openIndex === index}
                  aria-haspopup="true"
                  aria-controls={`dropdown-menu-${tab.label}`}
                  className="flex relative items-center gap-1 text-current font-semibold hover:underline-offset-4 hover:text-primary transition-all focus:outline-none"
                >
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
                      id={`dropdown-menu-${tab.label}`}
                      role="menu"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      style={{ translateX: '-50%' }}
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 bg-slate-50 shadow-xl rounded-lg p-2 pt-4"
                    >
                      <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-400" />
                      {/* Contenu du menu */}
                      <div className="grid h-fit w-full grid-cols-12 shadow-xl  lg:w-[600px] lg:shadow-none xl:w-[750px]">
                        {/* Colonne gauche */}
                        <div className="col-span-12 flex flex-col justify-between p-6 lg:col-span-4">
                          <h2 className="mb-2 text-xl font-semibold text-slate-800">{tab.label}</h2>
                          <p className="mb-6 max-w-xs text-sm text-neutral-400">
                            {tab.description}
                          </p>
                          {tab.descriptionLinks && (
                            <div className="flex flex-col gap-2">
                              {tab.descriptionLinks.map((link, linkIndex) => (
                                <CMSLink
                                  key={linkIndex}
                                  {...link.link}
                                  className="flex items-center gap-1 text-red-500"
                                >
                                  <ArrowRight />
                                </CMSLink>
                              ))}
                            </div>
                          )}
                        </div>
                        {/* Colonne droite */}
                        <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-slate-100 p-6 lg:col-span-8">
                          {tab.navItems &&
                            tab?.navItems?.map((navItem, navIndex) => {
                              switch (navItem.style) {
                                case 'default':
                                  return (
                                    <CMSLink
                                      key={navIndex}
                                      {...navItem.defaultLink?.link}
                                      label=""
                                      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                                    >
                                      <h3 className="mb-1 font-semibold text-blue-600">
                                        {navItem.defaultLink?.link.label}
                                      </h3>
                                      <p className="text-xs">{navItem.defaultLink?.description}</p>
                                    </CMSLink>
                                  )

                                case 'featured':
                                  return (
                                    <div key={navIndex} className="mb-6">
                                      {navItem.featuredLink?.tag && (
                                        <h3 className="text-lg font-bold mb-2 text-amber-500">
                                          {navItem.featuredLink.tag}
                                        </h3>
                                      )}
                                      {/* {navItem.featuredLink?.label && (
                                        <p className=" mb-2 text-base">
                                          {navItem.featuredLink?.links
                                            ?.map((link) => link.link?.label)
                                            .join(' - ')}
                                        </p>
                                      )} */}
                                      <div className="space-y-2">
                                        {navItem.featuredLink?.links?.map((link, linkIndex) => (
                                          <CMSLink
                                            key={linkIndex}
                                            {...link.link}
                                            label={link.link?.label || ''}
                                            appearance="link"
                                            className="text-gray-700 hover:text-gray-900 block text-sm"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )
                                case 'list':
                                  return (
                                    <div key={navIndex} className="mb-6">
                                      {navItem.listLinks?.tag && (
                                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                          {navItem.listLinks.tag}
                                        </p>
                                      )}
                                      <div className="space-y-2">
                                        {navItem.listLinks?.links?.map((link, linkIndex) => (
                                          <CMSLink
                                            key={linkIndex}
                                            {...link.link}
                                            label={link.link?.label || ''}
                                            appearance="link"
                                            className="text-gray-700 hover:text-gray-900 block text-sm"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )
                              }
                            })}
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
