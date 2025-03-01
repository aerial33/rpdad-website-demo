'use client'

// Importing required types and components
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { Header as HeaderType } from '@/payload-types'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { ArrowRight, ChevronDownIcon, PhoneCall, SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Desktop navigation component that takes header data as prop
export const DesktopNav: React.FC<{ data: HeaderType; className?: string }> = ({
  data,
  className,
}) => {
  // State to track which dropdown menu is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  // Get navigation items from header data
  const navItems = data?.tabs || []

  return (
    // Main container - hidden on mobile, flex on large screens
    <div className={`hidden justify-between lg:flex ${className || ''}`}>
      {/* Navigation menu */}
      <nav className="flex items-center gap-5 text-current">
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
                  className="relative text-base font-semibold text-current transition-all hover:text-primary hover:underline-offset-8"
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
                  className="relative flex items-center gap-1 font-semibold text-current transition-all hover:text-primary hover:underline-offset-4 focus:outline-none"
                >
                  {tab.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
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
                      transition={{ duration: 0.3, ease: easeOut }}
                      className="absolute top-full left-1/2 mt-4 -translate-x-1/2 rounded-2xl border border-primary bg-slate-50 py-4 pr-2 shadow-sm"
                    >
                      <div className="absolute -top-6 right-0 left-0 h-6 bg-transparent" />
                      <div
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%' }}
                        className="absolute top-0 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-destructive bg-slate-100"
                      />
                      {/* Contenu du menu */}
                      <div className="flex h-fit min-w-max">
                        {/* Colonne gauche */}
                        <div className="col-span-1 flex flex-col justify-between p-4">
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
                        <div className="col-span-1 flex flex-col gap-3 bg-slate-100 p-3">
                          {tab.navItems?.map((navItem, navIndex) => {
                            // Détermine le renderer à utiliser en fonction du style de navItem
                            // Utilise 'default' si le style n'existe pas dans renderers
                            const renderer =
                              navItem.style &&
                              renderers[navItem.style in renderers ? navItem.style : 'default']

                            // Appelle le renderer s'il existe, sinon retourne null
                            return renderer ? renderer(navItem, navIndex) : null
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
        <Button size="default" variant="outline">
          <PhoneCall className="mr-2 h-4 w-4" />
          05 40 12 90 10
        </Button>
        <Link href="/search" className="flex items-center transition-opacity hover:opacity-75">
          <SearchIcon className="h-5 w-5 text-current" />
        </Link>
      </div>
    </div>
  )
}

const renderers = {
  default: (navItem, navIndex) => (
    <CMSLink
      key={navIndex}
      {...navItem.defaultLink?.link}
      label=""
      className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
    >
      <h3 className="mb-1 font-semibold text-blue-600">{navItem.defaultLink?.link.label}</h3>
      <p className="text-xs">{navItem.defaultLink?.description}</p>
    </CMSLink>
  ),
  featured: (navItem, navIndex) => (
    <div key={navIndex} className="mb-6">
      {navItem.featuredLink?.tag && (
        <h3 className="mb-2 text-lg font-bold text-amber-500">{navItem.featuredLink.tag}</h3>
      )}

      <RichText data={navItem.featuredLink.label} enableGutter={false} />

      <div className="space-y-2">
        {navItem.featuredLink?.links?.map((link, linkIndex) => (
          <CMSLink
            key={linkIndex}
            {...link.link}
            label={link.link?.label || ''}
            appearance="link"
            className="block text-sm text-gray-700 hover:text-gray-900"
          />
        ))}
      </div>
    </div>
  ),
  list: (navItem, navIndex) => (
    <div key={navIndex} className="mb-6">
      {navItem.listLinks?.tag && (
        <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
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
            className="block text-sm text-gray-700 hover:text-gray-900"
          />
        ))}
      </div>
    </div>
  ),
}
