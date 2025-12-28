'use client'

import { useState, useMemo } from 'react'
import { Map, Users, Zap, CheckSquare, Mail, Bot, Phone, Calendar } from 'lucide-react'

type Resource = {
  title: string
  description: string
  link: string
  category: string
  icon: string
}

const iconMap: Record<string, React.ReactNode> = {
  'map': <Map size={16} />,
  'users': <Users size={16} />,
  'zap': <Zap size={16} />,
  'check-square': <CheckSquare size={16} />,
  'mail': <Mail size={16} />,
  'bot': <Bot size={16} />,
  'phone': <Phone size={16} />,
  'calendar': <Calendar size={16} />,
}

const resources: Resource[] = [
  {
    title: 'War Map',
    description: "Sam Ovens' strategic planning resource",
    link: 'https://docs.google.com/spreadsheets/d/1GzkgF_IBwIlCvrrfnn7KVwphpbBJmXDrNiM56ceKnVA/edit?gid=2020244050#gid=2020244050',
    category: 'Strategy',
    icon: 'map',
  },
  {
    title: 'The Mochary Method',
    description: 'Resources for leaders on management and hiring',
    link: 'https://docs.google.com/document/d/18FiJbYn53fTtPmphfdCKT2TMWH-8Y2L-MLqDk-MFV4s/edit?tab=t.0',
    category: 'Leadership',
    icon: 'users',
  },
  {
    title: '100 Hook Ideas',
    description: 'Content hooks to capture attention',
    link: 'https://docs.google.com/spreadsheets/d/1g9KMatBAbJirUSHIICqEsNCT6C15awJ1uHDG17-Oy5k/edit?usp=sharing',
    category: 'Content',
    icon: 'zap',
  },
  {
    title: 'Habit Tracker',
    description: 'Track health and fitness habits',
    link: 'https://progressprotocol.carrd.co/',
    category: 'Productivity',
    icon: 'check-square',
  },
]

const allCategories = Array.from(new Set(resources.map(r => r.category))).sort()

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      if (selectedCategory && resource.category !== selectedCategory) return false

      return true
    })
  }, [selectedCategory])

  return (
    <div>
      <div className="page-header">
        <h1 className="section-title">My Bookmarks</h1>
        <span className="item-count">{filteredResources.length} resources</span>
      </div>

      <p className="section-subtitle">
        Tools that work, most of the time.
      </p>

      <div className="controls-row">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter-select"
        >
          <option value="">All Categories</option>
          {allCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <ul className="simple-list">
        {filteredResources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <span className="list-icon">{iconMap[resource.icon]}</span>
              <span className="list-title">{resource.title}</span>
            </a>
            <span className="list-meta">{resource.category}</span>
          </li>
        ))}
      </ul>

      {filteredResources.length === 0 && (
        <div className="no-results">
          <p>No resources match your filter.</p>
        </div>
      )}
    </div>
  )
}
