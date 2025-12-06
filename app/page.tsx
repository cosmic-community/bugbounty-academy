import Link from 'next/link'
import { getLearningModules, getLabExercises, getTools } from '@/lib/cosmic'
import ModuleCard from '@/components/ModuleCard'
import LabCard from '@/components/LabCard'
import ToolCard from '@/components/ToolCard'
import type { LearningModule, LabExercise, Tool } from '@/types'

export default async function HomePage() {
  const [modules, labs, tools] = await Promise.all([
    getLearningModules(),
    getLabExercises(),
    getTools()
  ]);

  const featuredModules = modules.slice(0, 3);
  const featuredLabs = labs.slice(0, 3);
  const featuredTools = tools.slice(0, 3);

  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Master Bug Bounty Hunting
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Learn ethical hacking through interactive courses, hands-on lab exercises, 
          and real-world security tools. Start your journey from beginner to expert.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/modules" className="btn-primary">
            Explore Modules
          </Link>
          <Link href="/labs" className="btn-secondary">
            Try Labs
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="card text-center">
          <div className="text-4xl font-bold text-primary mb-2">{modules.length}</div>
          <div className="text-slate-400">Learning Modules</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-secondary mb-2">{labs.length}</div>
          <div className="text-slate-400">Lab Exercises</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-success mb-2">{tools.length}</div>
          <div className="text-slate-400">Security Tools</div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Modules</h2>
          <Link href="/modules" className="text-primary hover:text-primary-dark">
            View All →
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
          <h2 className="text-3xl font-bold">Hands-On Labs</h2>
          <Link href="/labs" className="text-primary hover:text-primary-dark">
            View All →
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
          <h2 className="text-3xl font-bold">Essential Tools</h2>
          <Link href="/tools" className="text-primary hover:text-primary-dark">
            View All →
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