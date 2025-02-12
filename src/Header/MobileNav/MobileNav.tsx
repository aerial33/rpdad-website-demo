import Logo from '@/components/Logo/Logo'
import RichText from '@/components/RichText'
import type { Header as HeaderType } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import useMeasure from 'react-use-measure'

// Types plus précis et documentés
type NavItemsType = HeaderType['tabs']
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

// Constantes pour l'animation
const ANIMATION_DURATION = 0.3
const ANIMATION_EASE = 'easeOut'

// Composant principal optimisé
export const MobileNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = data?.tabs || []

  const handleClose = useCallback(() => setIsOpen(false), [])
  const handleOpen = useCallback(() => setIsOpen(true), [])

  return (
    <div className="block lg:hidden">
      <button onClick={handleOpen} className="block text-3xl" aria-label="Ouvrir le menu">
        <Menu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={handleClose} aria-label="Fermer le menu">
                <X className="text-3xl text-neutral-950" />
              </button>
            </div>

            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {navItems.map((tab) => (
                <MobileMenuLink key={tab.label} tabs={tab} setMenuOpen={setIsOpen} />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

// Composant de lien optimisé
const MobileMenuLink: React.FC<{
  tabs: ArrayElement<NavItemsType>
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({ tabs, setMenuOpen }) => {
  const [ref, { height }] = useMeasure()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { enableDirectLink, enableDropdown, label, link } = tabs

  const handleLinkClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setMenuOpen(false)
    },
    [setMenuOpen],
  )

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className="relative text-neutral-950">
      {enableDirectLink ? (
        <Link
          href={link?.url || '#'}
          onClick={handleLinkClick}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{label}</span>
          <ArrowRight />
        </Link>
      ) : (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={handleToggle}
          role="button"
          tabIndex={0}
        >
          <Link href={link?.url || '#'} onClick={handleLinkClick}>
            {label}
          </Link>
          <motion.div
            animate={{ rotate: isOpen ? '180deg' : '0deg' }}
            transition={{ duration: ANIMATION_DURATION, ease: ANIMATION_EASE }}
          >
            <ChevronDown />
          </motion.div>
        </div>
      )}

      {enableDropdown && (
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? height : '0px',
            marginBottom: isOpen ? '24px' : '0px',
            marginTop: isOpen ? '12px' : '0px',
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            {tabs?.navItems?.map((navItem, navIndex) => {
              const renderers = {
                default: (navItem, navIndex) => (
                  <Link
                    key={navIndex}
                    href={navItem?.defaultLink?.link}
                    onClick={handleLinkClick}
                    className="grid rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
                  >
                    <h3 className="mb-1 font-semibold text-blue-600">
                      {navItem.defaultLink?.link.label}
                    </h3>
                    <p className="text-xs">{navItem.defaultLink?.description}</p>
                  </Link>
                ),

                featured: (navItem, navIndex) => (
                  <div key={navIndex} className="mb-6">
                    {navItem.featuredLink?.tag && (
                      <h3 className="text-lg font-bold mb-2 text-amber-500">
                        {navItem.featuredLink.tag}
                      </h3>
                    )}

                    <RichText data={navItem.featuredLink?.label} enableGutter={false} />

                    <div className="space-y-2">
                      {navItem.featuredLink?.links?.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.link}
                          onClick={handleLinkClick}
                          className="text-gray-700 hover:text-gray-900 block text-sm"
                        >
                          {link.link?.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),

                list: (navItem, navIndex) => (
                  <div key={navIndex} className="mb-6">
                    {navItem.listLinks?.tag && (
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                        {navItem.listLinks.tag}
                      </p>
                    )}
                    <div className="space-y-2">
                      {navItem.listLinks?.links?.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.link}
                          onClick={handleLinkClick}
                          className="text-gray-700 hover:text-gray-900 block text-sm"
                        >
                          {link.link?.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              }

              const type = navItem.style || 'default'
              return renderers[type as keyof typeof renderers](navItem, navIndex)
            })}
          </div>
        </motion.div>
      )}
    </div>
  )
}
