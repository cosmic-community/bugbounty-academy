'use client'

import { useEffect, useState } from 'react'
import ModuleFilters from '@/components/ModuleFilters'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LearningModule } from '@/types'

export default function ModulesPage() {
  const { t } = useLanguage()
  const [modules, setModules] = useState<LearningModule[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchModules() {
      try {
        const res = await fetch('/api/modules')
        const data = await res.json()
        setModules(data)
      } catch (error) {
        console.error('Error fetching modules:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchModules()
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
        <h1 className="text-4xl font-bold mb-4">{t.modules.title}</h1>
        <p className="text-xl text-slate-300">
          {t.modules.description}
        </p>
      </div>

      <ModuleFilters modules={modules} />
    </div>
  )
}