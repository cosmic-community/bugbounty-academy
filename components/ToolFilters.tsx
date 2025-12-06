'use client'

import { useState, useMemo } from 'react'
import ToolCard from './ToolCard'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Tool } from '@/types'

interface ToolFiltersProps {
  tools: Tool[];
}

export default function ToolFilters({ tools }: ToolFiltersProps) {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showFreeOnly, setShowFreeOnly] = useState<boolean>(false)

  const categories = useMemo(() => {
    const unique = new Set(tools.map(t => t.metadata?.category?.key).filter(Boolean))
    return Array.from(unique)
  }, [tools])

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || 
        tool.metadata?.category?.key === selectedCategory
      const matchesFree = !showFreeOnly || tool.metadata?.is_free === true
      return matchesCategory && matchesFree
    })
  }, [tools, selectedCategory, showFreeOnly])

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">{t.tools.category}</label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-dark-surface border border-dark-border rounded-lg px-4 py-2"
          >
            <option value="all">{t.tools.allCategories}</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox"
              checked={showFreeOnly}
              onChange={(e) => setShowFreeOnly(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">{t.tools.freeOnly}</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 text-slate-400">
          {t.tools.noToolsFound}
        </div>
      )}
    </div>
  )
}