'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: '/projects', label: 'Projects' },
    { href: '/posts', label: 'Posts' },
    { href: '/books', label: 'Books' },
    { href: '/resources', label: 'Resources' },
    { href: '/music', label: 'Music' },
  ]

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="site-title">
          Richard Reed
        </Link>
        <nav className="main-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || pathname.startsWith(item.href + '/') ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}
