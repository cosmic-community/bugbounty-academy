'use client'

import { useState, useMemo } from 'react'
import LabCard from './LabCard'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LabExercise } from '@/types'

interface LabFiltersProps {
  labs: LabExercise[];
}

export default function LabFilters({ labs }: LabFiltersProps) {
  const { t } = useLanguage()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')

  const difficulties = useMemo(() => {
    const unique = new Set(labs.map(l => l.metadata?.difficulty?.key).filter(Boolean))
    return Array.from(unique)
  }, [labs])

  const types = useMemo(() => {
    const unique = new Set(labs.map(l => l.metadata?.vulnerability_type?.key).filter(Boolean))
    return Array.from(unique)
  }, [labs])

  const filteredLabs = useMemo(() => {
    return labs.filter(lab => {
      const matchesDifficulty = selectedDifficulty === 'all' || 
        lab.metadata?.difficulty?.key === selectedDifficulty
      const matchesType = selectedType === 'all' || 
        lab.metadata?.vulnerability_type?.key === selectedType
      return matchesDifficulty && matchesType
    })
  }, [labs, selectedDifficulty, selectedType])

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">{t.labs.difficulty}</label>
          <select 
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2"
          >
            <option value="all">{t.labs.allLevels}</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t.labs.vulnerabilityType}</label>
          <select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2"
          >
            <option value="all">{t.labs.allTypes}</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>

      {filteredLabs.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          {t.labs.noLabsFound}
        </div>
      )}
    </div>
  )
}