import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-dark-surface border-b border-dark-border sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🎯 BugBounty Academy
          </Link>
          
          <div className="flex gap-6">
            <Link href="/modules" className="hover:text-primary transition-colors">
              Modules
            </Link>
            <Link href="/labs" className="hover:text-primary transition-colors">
              Labs
            </Link>
            <Link href="/tools" className="hover:text-primary transition-colors">
              Tools
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}