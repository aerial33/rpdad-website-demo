import { Undo } from 'lucide-react' // Importation d'icônes depuis la bibliothèque lucide-react
import React, { useCallback, useMemo } from 'react'
import { HexColorInput, HexColorPicker } from 'react-colorful' // Importation de composants pour la sélection de couleurs
import { Color } from '../types' // Importation d'un type personnalisé
import './ColorPicker.css' // Importation des styles CSS spécifiques au composant

// Définition des propriétés attendues par le composant
type ColorPickerProps = {
  color: string // Couleur actuellement sélectionnée
  colors?: Color[] // Liste optionnelle de couleurs personnalisées
  customColors?: string[] // Liste optionnelle de couleurs personnalisées sous forme de chaînes
  onChange: (color: string) => void // Fonction de rappel pour gérer le changement de couleur
}

// Liste de couleurs de base utilisées dans le sélecteur
const basicColors = [
  // Couleurs du thème
  'oklch(100% 0 0)', // background
  'oklch(27.63% 0.068 262.87)', // foreground
  'oklch(51.6% 0.024 247.23)',

  'oklch(63.4% 0.195 350)',

  'oklch(54.5% 0.185 350)', // primary

  'oklch(63.4% 0.195 29.23)', // destructive

  'oklch(90.8% 0.028 238.15)', // input

  'oklch(74% 0.078 196)', // success
  'oklch(85% 0.157 89)', // warning
  'oklch(86% 0.145 29.23)', // error
]

// Composant principal pour le sélecteur de couleurs
export default function ColorPicker({
  color,
  colors,
  onChange,
}: Readonly<ColorPickerProps>): React.JSX.Element {
  // Empêcher la propagation des événements pour maintenir le dropdown ouvert
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  // Utiliser useMemo pour optimiser les performances
  const colorButtons = useMemo(() => {
    return basicColors.map((basicColor, index) => (
      <button
        className={`w-6 h-6 ${basicColor === color ? 'active' : ''}`}
        key={`${basicColor}-${index}`}
        style={{ backgroundColor: basicColor }}
        onClick={(e) => {
          e.stopPropagation()
          onChange(basicColor)
        }}
        aria-label={`Sélectionner la couleur ${basicColor}`}
        title={basicColor}
      />
    ))
  }, [basicColors, color, onChange])

  const onReset = useCallback(
    (e: React.MouseEvent): void => {
      e.stopPropagation()
      onChange('')
    },
    [onChange],
  )

  return (
    <div className="color-picker-wrapper" onClick={stopPropagation}>
      <div className="color-input wrapper-input">
        <div className="" style={{ backgroundColor: color }} aria-hidden="true"></div>
        <HexColorInput
          className="flex-1 px-2 py-1 min-w-0"
          onChange={onChange}
          color={color}
          aria-label="Code couleur hexadécimal"
        />
      </div>
      <button className="" onClick={onReset} type="button">
        <Undo strokeWidth={1.5} className="undo-button" />
        <span>Réinitialiser la couleur</span>
      </button>
      <div className="color-picker-basic-color mt-2">{colorButtons}</div>
      <HexColorPicker color={color} onChange={onChange} className="mt-4 w-44 h-44" />
    </div>
  )
}
