'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="bg-dark-surface border-b border-dark-border sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🎯 BugBounty Academy
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link href="/modules" className="hover:text-primary transition-colors">
              {t.nav.modules}
            </Link>
            <Link href="/labs" className="hover:text-primary transition-colors">
              {t.nav.labs}
            </Link>
            <Link href="/tools" className="hover:text-primary transition-colors">
              {t.nav.tools}
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}