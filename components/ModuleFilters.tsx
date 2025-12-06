'use client'

import { useState, useMemo } from 'react'
import ModuleCard from './ModuleCard'
import type { LearningModule } from '@/types'

interface ModuleFiltersProps {
  modules: LearningModule[];
}

export default function ModuleFilters({ modules }: ModuleFiltersProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const difficulties = useMemo(() => {
    const unique = new Set(modules.map(m => m.metadata?.difficulty_level?.key).filter(Boolean))
    return Array.from(unique)
  }, [modules])

  const categories = useMemo(() => {
    const unique = new Set(modules.map(m => m.metadata?.category?.key).filter(Boolean))
    return Array.from(unique)
  }, [modules])

  const filteredModules = useMemo(() => {
    return modules.filter(module => {
      const matchesDifficulty = selectedDifficulty === 'all' || 
        module.metadata?.difficulty_level?.key === selectedDifficulty
      const matchesCategory = selectedCategory === 'all' || 
        module.metadata?.category?.key === selectedCategory
      return matchesDifficulty && matchesCategory
    })
  }, [modules, selectedDifficulty, selectedCategory])

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Difficulty</label>
          <select 
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2"
          >
            <option value="all">All Levels</option>
            {difficulties.map(diff => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          No modules found matching your criteria.
        </div>
      )}
    </div>
  )
}