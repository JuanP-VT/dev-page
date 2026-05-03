'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'
import { useTheme } from 'next-themes'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
})

export default function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)  
  const { theme = "dark" } = useTheme()

 const darkTheme = `{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#1e293b',
      'primaryBorderColor': '#475569',
      'primaryTextColor': '#f8fafc',
      'lineColor': '#cbd5e1',
      'fontFamily': 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      'clusterBkg': '#172131',
      'clusterBorder': '#334155',
      'edgeLabelBackground': '#1e293b',
      'background': 'transparent'
    }
  }
}`;

const lightTheme = `{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#FFFFFF',
      'primaryBorderColor': '#94a3b8',
      'primaryTextColor': '#1e293b',
      'lineColor': '#475569',
      'fontFamily': 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      'clusterBkg': '#F1F5F9',
      'clusterBorder': '#CBD5E1',
      'edgeLabelBackground': '#F1F5F9',
      'background': 'transparent'
    }
  }
}`;
  const themeString = theme === "dark" ? darkTheme : lightTheme
  useEffect(() => {
    if (!ref.current) return

    const id = `mermaid-${Math.random().toString(36).slice(2)}`
    mermaid.render(id, `%%${themeString}%%${chart}`)
    .then(({ svg }) => {
      if (ref.current) ref.current.innerHTML = svg
    })
  }, [chart, themeString])

return <div ref={ref} className="flex justify-center mermaid-diagram" />
}