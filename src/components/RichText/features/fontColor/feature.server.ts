import { createServerFeature } from '@payloadcms/richtext-lexical'
// import { TextColorFeatures } from './feature.client'

export const TextColorFeature = createServerFeature({
  feature: {
    i18n: {
      en: {
        name: 'Text Color',
      },
      fr: {
        name: 'Couleur du texte',
      },
    },
    ClientFeature: './feature.client#TextColorFeatures',
  },
  key: 'textColor',
})
