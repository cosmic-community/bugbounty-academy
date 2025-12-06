'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ModuleCard from '@/components/ModuleCard'
import LabCard from '@/components/LabCard'
import ToolCard from '@/components/ToolCard'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LearningModule, LabExercise, Tool } from '@/types'

export default function HomePage() {
  const { t } = useLanguage()
  const [modules, setModules] = useState<LearningModule[]>([])
  const [labs, setLabs] = useState<LabExercise[]>([])
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [modulesRes, labsRes, toolsRes] = await Promise.all([
          fetch('/api/modules'),
          fetch('/api/labs'),
          fetch('/api/tools')
        ])
        
        const modulesData = await modulesRes.json()
        const labsData = await labsRes.json()
        const toolsData = await toolsRes.json()
        
        setModules(modulesData)
        setLabs(labsData)
        setTools(toolsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  const featuredModules = modules.slice(0, 3)
  const featuredLabs = labs.slice(0, 3)
  const featuredTools = tools.slice(0, 3)

  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {t.home.title}
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          {t.home.subtitle}
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/modules" className="btn-primary">
            {t.home.exploreModules}
          </Link>
          <Link href="/labs" className="btn-secondary">
            {t.home.tryLabs}
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card text-center">
          <div className="text-4xl font-bold text-primary mb-2">{modules.length}</div>
          <div className="text-slate-400">{t.home.learningModules}</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-secondary mb-2">{labs.length}</div>
          <div className="text-slate-400">{t.home.labExercises}</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-success mb-2">{tools.length}</div>
          <div className="text-slate-400">{t.home.securityTools}</div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{t.home.featuredModules}</h2>
          <Link href="/modules" className="text-primary hover:text-primary-dark">
            {t.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModules.map((module: LearningModule) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Featured Labs */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{t.home.handsOnLabs}</h2>
          <Link href="/labs" className="text-primary hover:text-primary-dark">
            {t.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredLabs.map((lab: LabExercise) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">{t.home.essentialTools}</h2>
          <Link href="/tools" className="text-primary hover:text-primary-dark">
            {t.home.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool: Tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  )
}