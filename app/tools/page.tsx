'use client'

import { useEffect, useState } from 'react'
import ToolFilters from '@/components/ToolFilters'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Tool } from '@/types'

export default function ToolsPage() {
  const { t } = useLanguage()
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTools() {
      try {
        const res = await fetch('/api/tools')
        const data = await res.json()
        setTools(data)
      } catch (error) {
        console.error('Error fetching tools:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchTools()
  }, [])

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.tools.title}</h1>
        <p className="text-xl text-slate-300">
          {t.tools.description}
        </p>
      </div>

      <ToolFilters tools={tools} />
    </div>
  )
}