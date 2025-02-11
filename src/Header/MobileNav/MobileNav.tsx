import { CMSLink } from '@/components/Link'
import Logo from '@/components/Logo/Logo'
import RichText from '@/components/RichText'
import type { Header as HeaderType } from '@/payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import useMeasure from 'react-use-measure'
// Utiliser le type existant pour les éléments de navigation
type NavItemsType = HeaderType['tabs']

// Type utilitaire pour extraire le type d'un élément de tableau
type ArrayElement<A> = A extends readonly (infer T)[] ? T : never

type NavItemType = ArrayElement<NavItemsType>

export const MobileNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const navItems = data?.tabs || [] // Remplacez par les données réelles

  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <Menu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <X className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {navItems.map((tab) => (
                <MobileMenuLink key={tab.label} tabs={tab} setMenuOpen={setOpen} />
              ))}

              {/* // TOdo navItems menu */}
              {/* <MobileMenuLink /> */}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
// Composant pour les liens du menu mobile avec fonctionnalité de dépliage
const MobileMenuLink: React.FC<{
  tabs: ArrayElement<NavItemsType>
  setMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({ tabs, setMenuOpen }) => {
  // Mesure la hauteur du contenu dépliable
  const [ref, { height }] = useMeasure()
  // État d'ouverture du contenu dépliable
  const [open, setOpen] = useState<boolean>(false)

  const { enableDirectLink, enableDropdown, label, link } = tabs

  return (
    <div className="relative text-neutral-950">
      {enableDirectLink ? ( // Si contenu dépliable existe
        <Link
          href={link?.url || '#'} // Utilisation du type CMSLinkType
          onClick={(e) => {
            e.stopPropagation()
            setMenuOpen(false)
          }}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{label}</span>
          <ArrowRight /> {/*// Icône de lien simple */}
        </Link>
      ) : (
        // Si pas de contenu dépliable
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)} // Basculer l'état d'ouverture
        >
          <Link
            href={link?.url || '#'} // Utilisation du type CMSLinkType
            onClick={(e) => {
              e.stopPropagation()
              setMenuOpen(false)
            }} // Suppression de la fonction fléchée
          >
            {label}
          </Link>
          {/* Animation de la flèche de dépliage */}
          <motion.div
            animate={{ rotate: open ? '180deg' : '0deg' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ChevronDown />
          </motion.div>
        </div>
      )}
      {/* Animation du contenu dépliable */}
      {enableDropdown && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : '0px', // Animation de la hauteur
            marginBottom: open ? '24px' : '0px', // Espacement dynamique
            marginTop: open ? '12px' : '0px',
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            {tabs?.navItems?.map((navItem, navIndex) => {
              // Détermine le renderer à utiliser en fonction du style de navItem
              // Utilise 'default' si le style n'existe pas dans renderers
              const renderer =
                navItem.style && navItem.style in renderers
                  ? renderers[navItem.style]
                  : renderers.default

              // Appelle le renderer s'il existe, sinon retourne null
              // @ts-ignore
              return renderer(navItem, navIndex)
            })}
          </div>
        </motion.div>
      )}
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
        <h3 className="text-lg font-bold mb-2 text-amber-500">{navItem.featuredLink.tag}</h3>
      )}
      <p>
        <RichText data={navItem.featuredLink.label} enableGutter={false} />
      </p>
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
  ),
}
