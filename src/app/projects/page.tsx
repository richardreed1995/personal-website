'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Rocket, Mail, Play, Sparkles, GraduationCap, LayoutDashboard } from 'lucide-react'
import { projects, statusConfig } from '@/data/projects'

const iconMap: Record<string, React.ReactNode> = {
  'rocket': <Rocket size={18} />,
  'mail': <Mail size={18} />,
  'play': <Play size={18} />,
  'sparkles': <Sparkles size={18} />,
  'graduation-cap': <GraduationCap size={18} />,
  'layout-dashboard': <LayoutDashboard size={18} />,
}

const allCategories = Array.from(new Set(projects.map(p => p.category))).sort()
const allStatuses = ['active', 'building', 'completed', 'paused'] as const

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedCategory && project.category !== selectedCategory) return false
      if (selectedStatus && project.status !== selectedStatus) return false

      return true
    })
  }, [selectedCategory, selectedStatus])

  return (
    <div>
      <div className="page-header">
        <h1 className="section-title">What I work on</h1>
        <span className="item-count">{filteredProjects.length} projects</span>
      </div>

      <p className="section-subtitle">
        The 1% that shipped, the 99% that didn't.
      </p>

      <div className="controls-row">
        <div className="filters-group">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="filter-select"
          >
            <option value="">All Status</option>
            {allStatuses.map(status => (
              <option key={status} value={status}>{statusConfig[status].label}</option>
            ))}
          </select>

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
      </div>

      <ul className="simple-list">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <span className="list-icon">{iconMap[project.icon]}</span>
              <span className="list-title">{project.title}</span>
            </Link>
            <span
              className="list-status"
              style={{
                backgroundColor: statusConfig[project.status].color,
                color: statusConfig[project.status].textColor
              }}
            >
              {statusConfig[project.status].label}
            </span>
          </li>
        ))}
      </ul>

      {filteredProjects.length === 0 && (
        <div className="no-results">
          <p>No projects match your filter.</p>
        </div>
      )}
    </div>
  )
}
