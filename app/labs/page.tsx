'use client'

import { useEffect, useState } from 'react'
import LabFilters from '@/components/LabFilters'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LabExercise } from '@/types'

export default function LabsPage() {
  const { t } = useLanguage()
  const [labs, setLabs] = useState<LabExercise[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLabs() {
      try {
        const res = await fetch('/api/labs')
        const data = await res.json()
        setLabs(data)
      } catch (error) {
        console.error('Error fetching labs:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchLabs()
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
        <h1 className="text-4xl font-bold mb-4">{t.labs.title}</h1>
        <p className="text-xl text-slate-300">
          {t.labs.description}
        </p>
      </div>

      <LabFilters labs={labs} />
    </div>
  )
}