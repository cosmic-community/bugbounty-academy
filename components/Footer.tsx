export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-20">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BugBounty Academy
            </h3>
            <p className="text-slate-400">
              Learn ethical hacking through practical courses, hands-on labs, and real-world security tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/modules" className="hover:text-primary transition-colors">Learning Modules</a>
              </li>
              <li>
                <a href="/labs" className="hover:text-primary transition-colors">Lab Exercises</a>
              </li>
              <li>
                <a href="/tools" className="hover:text-primary transition-colors">Security Tools</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Powered by Cosmic
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} BugBounty Academy. Built with Next.js and Cosmic.</p>
        </div>
      </div>
    </footer>
  )
}