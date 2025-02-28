import { createServerFeature } from '@payloadcms/richtext-lexical'
import { ColorFeatureProps } from '../../types'

export const TextColorFeature = createServerFeature<
  ColorFeatureProps,
  ColorFeatureProps,
  ColorFeatureProps
>({
  feature({ props }) {
    return {
      ClientFeature:
        '@/components/RichText/extensions/lexical-extensions/features/textColor/feature.client',
      clientFeatureProps: {
        colors: props?.colors,
      },
    }
  },
  key: 'textColor',
})
