export const ColorJSXConverters = {
  text: ({ node }) => {
    let text = node.text

    if (node.style) {
      const style: React.CSSProperties = {}

      // Extraction des styles avec regex
      const colorMatch = node.style.match(/color: ([^;]+)/)
      if (colorMatch) style.color = colorMatch[1]

      const bgColorMatch = node.style.match(/background-color: ([^;]+)/)
      if (bgColorMatch) style.backgroundColor = bgColorMatch[1]

      if (Object.keys(style).length > 0) {
        return <span style={style}>{text}</span>
      }
    }

    return text
  },
}
