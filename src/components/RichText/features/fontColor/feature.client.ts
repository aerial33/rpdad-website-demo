'use client'

import {
  createClientFeature,
  toolbarFeatureButtonsGroupWithItems,
} from '@payloadcms/richtext-lexical/client'
import { createCommand } from '@payloadcms/richtext-lexical/lexical'
import ColorFeature from './components/ColorFeature'

// Définir une commande Lexical pour appliquer une couleur
export const APPLY_TEXT_COLOR_COMMAND = createCommand<string>('APPLY_TEXT_COLOR_COMMAND')

export const TextColorFeatures = createClientFeature({
  toolbarFixed: {
    groups: [
      toolbarFeatureButtonsGroupWithItems([
        {
          key: 'textColor',
          Component: ColorFeature,
        },
      ]),
    ],
  },
})
