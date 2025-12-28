export type Project = {
  id: string
  title: string
  description: string
  longDescription: string
  icon: string
  status: 'active' | 'completed' | 'paused' | 'building'
  category: string
  tags: string[]
  link?: string
  year: number
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'sendlead-agency',
    title: 'Sendlead Agency',
    description: 'B2B growth agency helping companies scale their outbound and inbound marketing.',
    longDescription: `Sendlead Agency is a B2B growth agency focused on helping companies scale their marketing efforts. We specialize in outbound campaigns, content marketing, and marketing automation.

After years of working in agencies and in-house roles, I noticed a gap in the market for an agency that truly understood the B2B buyer journey and could deliver measurable results.

We work with SaaS companies, professional services firms, and B2B tech companies to generate qualified leads and build sustainable growth engines.`,
    icon: 'rocket',
    status: 'active',
    category: 'Business',
    tags: ['Agency', 'B2B', 'Marketing'],
    link: 'https://sendlead.co',
    year: 2024,
    featured: true,
  },
  {
    id: 'zoned',
    title: 'Zoned',
    description: 'Focus sidebar combining pomodoro, music, to-do, and work forms.',
    longDescription: `Zoned is a productivity app I built from scratch to solve my own focus challenges.

I wanted a simple, unified workspace that keeps everything I need for deep work in one place. No more tab switching or context switching during pomodoro sessions.

Features:
- Pomodoro timer with custom intervals
- Integrated music player
- Daily to-do list
- Work session logging form

The focus sidebar keeps you in flow without distractions.`,
    icon: 'sparkles',
    status: 'active',
    category: 'Productivity',
    tags: ['App', 'Focus', 'Pomodoro'],
    link: 'https://zoned.to',
    year: 2025,
  },
  {
    id: 'county-championship',
    title: 'County Championship',
    description: 'Centralised website aggregating YouTube live streams of county cricket.',
    longDescription: `County Championship is a platform I built to scratch my own itch - a centralized hub for all county cricket live streams.

Finding matches across multiple YouTube channels was frustrating. I wanted one place to see what games are live and jump straight to the stream.

Features:
- Live stream aggregation from multiple YouTube channels
- Real-time match status updates
- Easy navigation to live games
- County cricket focused

Simple solution to a common problem for cricket fans.`,
    icon: 'layout-dashboard',
    status: 'active',
    category: 'Platform',
    tags: ['Cricket', 'Sports', 'Aggregator'],
    link: 'https://countychampionship.com',
    year: 2025,
  },
  {
    id: 'sendlead-app',
    title: 'Sendlead App',
    description: 'Self-service platform for buying leads with distribution and auctions.',
    longDescription: `The Sendlead App allows businesses to purchase leads completely self-service - no calls, no account managers, just instant access.

Features include:
- Lead distribution system
- Marketplace for browsing and purchasing
- Auction system for premium leads
- Real-time inventory

Built to make buying leads as easy as buying anything else online.`,
    icon: 'play',
    status: 'building',
    category: 'SaaS',
    tags: ['SaaS', 'Leads', 'Marketplace'],
    year: 2026,
  },
  {
    id: 'pushsend',
    title: 'Pushsend',
    description: 'B2B email outreach agency with 50+ automations powering campaigns.',
    longDescription: `Pushsend was a B2B marketing agency focused on email outreach.

The agency was nearly fully productised with over 50 automations powering everything from campaign creation, management, reporting, and technical setup.

Paused as it was getting increasingly hard to find success for clients unless they had a great offer - realized the vehicle (product/business) matters more than the marketing.`,
    icon: 'mail',
    status: 'paused',
    category: 'Agency',
    tags: ['Email', 'Automation', 'Outreach'],
    link: 'https://pushsend.co',
    year: 2024,
  },
]

export const statusConfig = {
  active: { label: 'Active', color: '#22c55e' },
  building: { label: 'Building', color: '#f59e0b' },
  completed: { label: 'Completed', color: '#0ea5e9' },
  paused: { label: 'Paused', color: '#94a3b8' },
}
