import { Button } from '@/components/ui/button'
import { useState } from 'react'

const ColorFeature = () => {
  const [fontColor, setFontColor] = useState<string | undefined>('')
  const [CSSVariable, setCSSVariable] = useState<string | null>(null)
  return (
    <div>
      <Button
        onClick={() => {
          const color = prompt('Enter a color (e.g., red, #ff0000):')
          if (color) {
            setFontColor(fontColor)
            setCSSVariable(CSSVariable)
          }
        }}
      >
        {/* @ts-ignore */}
        <span style={{ color: CSSVariable }}>A</span>, // Icône pour le bouton
      </Button>
    </div>
  )
}
export default ColorFeature
