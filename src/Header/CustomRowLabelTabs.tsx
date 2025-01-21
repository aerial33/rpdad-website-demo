'use client'
import type { PayloadClientReactComponent, RowLabelComponent } from 'payload'

import { useRowLabel } from '@payloadcms/ui'
// Définir une interface pour le type de données attendu
interface RowLabelData {
  label: string
  // Ajoutez d'autres propriétés si nécessaire
}

const CustomRowLabelTabs: PayloadClientReactComponent<RowLabelComponent> = () => {
  const { data } = useRowLabel<RowLabelData>()

  return data.label || '...'
}

export default CustomRowLabelTabs
