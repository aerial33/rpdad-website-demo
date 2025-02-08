// Configuration du header global avec Payload CMS

// Importation des types et utilitaires nécessaires
import { link } from '@/fields/link'
import type { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

// Configuration principale du header
export const Header: GlobalConfig = {
  slug: 'header', // Identifiant unique pour le global
  access: {
    read: () => true, // Accessible publiquement
  },
  // Définition des champs du header
  fields: [
    {
      name: 'tabs',
      type: 'array', // Collection d'éléments de menu
      admin: {
        components: {
          RowLabel: '@/Header/CustomRowLabelTabs', // Composant personnalisé pour l'affichage des labels
        },
      },
      fields: [
        {
          name: 'label', // Libellé de l'onglet
          type: 'text',
          required: true,
        },
        {
          type: 'row', // Groupe de champs en ligne
          fields: [
            {
              name: 'enableDirectLink', // Activation lien direct
              type: 'checkbox',
            },
            {
              name: 'enableDropdown', // Activation menu déroulant
              type: 'checkbox',
            },
          ],
        },
        {
          // Section repliable pour les liens directs
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.enableDirectLink, // Affiché si lien direct activé
          },
          fields: [
            link({
              // Configuration du champ lien
              appearances: false,
              disableLabel: true,
            }),
          ],
          label: 'Direct Link',
        },
        {
          // Section repliable pour les menus déroulants
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.enableDropdown, // Affiché si menu déroulant activé
          },
          fields: [
            {
              name: 'description', // Description du menu
              type: 'textarea',
            },
            {
              name: 'descriptionLinks', // Liens de description
              type: 'array',
              fields: [
                link({
                  appearances: false,
                  overrides: {
                    label: false,
                  },
                }),
              ],
            },
            {
              // Configuration des éléments de navigation
              name: 'navItems',
              type: 'array',
              admin: {
                components: {
                  RowLabel: '@/Header/CustomRowLabelNavItems#CustomRowLabelNavItems', // Composant personnalisé pour les labels
                },
              },
              fields: [
                {
                  name: 'style', // Style d'affichage
                  type: 'select',
                  defaultValue: 'default',
                  options: [
                    { label: 'Default', value: 'default' }, // Style par défaut
                    { label: 'Featured', value: 'featured' }, // Style mis en avant
                    { label: 'List', value: 'list' }, // Style en liste
                  ],
                },
                {
                  // Configuration pour le style par défaut
                  name: 'defaultLink',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) => siblingData.style === 'default',
                  },
                  fields: [
                    link({
                      appearances: false,
                      overrides: {
                        label: false,
                      },
                    }),
                    {
                      name: 'description', // Description du lien
                      type: 'textarea',
                    },
                  ],
                },
                {
                  // Configuration pour le style "featured"
                  name: 'featuredLink',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) => siblingData.style === 'featured',
                  },
                  fields: [
                    {
                      name: 'tag', // Étiquette du lien
                      type: 'text',
                    },
                    {
                      name: 'label', // Libellé principal
                      type: 'richText',
                    },
                    {
                      name: 'links', // Liste de liens
                      type: 'array',
                      fields: [
                        link({
                          appearances: false,
                          overrides: {
                            label: false,
                          },
                        }),
                      ],
                    },
                  ],
                },
                {
                  // Configuration pour le style "list"
                  name: 'listLinks',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) => siblingData.style === 'list',
                  },
                  fields: [
                    {
                      name: 'tag', // Étiquette de la liste
                      type: 'text',
                    },
                    {
                      name: 'links', // Liste de liens
                      type: 'array',
                      fields: [
                        link({
                          appearances: false,
                          overrides: {
                            label: false,
                          },
                        }),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          label: 'Dropdown Menu',
        },
      ],
      label: 'Main Menu Items', // Libellé principal de la section
    },
  ],
  // Hooks pour la revalidation après modification
  hooks: {
    afterChange: [revalidateHeader],
  },
}
