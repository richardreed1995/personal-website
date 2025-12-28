import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Rocket, Mail, Play, Sparkles, GraduationCap, LayoutDashboard } from 'lucide-react'
import { projects, statusConfig } from '@/data/projects'

const iconMap: Record<string, React.ReactNode> = {
  'rocket': <Rocket size={32} />,
  'mail': <Mail size={32} />,
  'play': <Play size={32} />,
  'sparkles': <Sparkles size={32} />,
  'graduation-cap': <GraduationCap size={32} />,
  'layout-dashboard': <LayoutDashboard size={32} />,
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find(p => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <article className="project-detail">
      <Link href="/projects" className="back-link">
        ← Back to projects
      </Link>
      
      <div className="project-detail-header">
        <div className="project-detail-icon">
          {iconMap[project.icon]}
        </div>
        <div className="project-detail-info">
          <h1 className="section-title">{project.title}</h1>
          <div className="project-meta">
            <span 
              className="project-status"
              style={{ backgroundColor: statusConfig[project.status].color }}
            >
              {statusConfig[project.status].label}
            </span>
            <span className="project-category">{project.category}</span>
          </div>
        </div>
      </div>

      <div className="project-detail-content">
        {project.longDescription.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="project-detail-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {project.link && (
        <div className="project-detail-actions">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
          >
            Visit Project →
          </a>
        </div>
      )}
    </article>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}
