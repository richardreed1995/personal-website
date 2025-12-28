import Link from 'next/link'

const posts = [
  { title: 'The Vehicle Is All That Matters', date: 'Dec 2025', slug: 'the-vehicle-is-all-that-matters' },
  { title: 'Avoid the middle', date: 'Sep 2025', slug: 'middle' },
  { title: 'Bookend Your Day', date: 'Nov 2025', slug: 'bookend-your-day' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">Hi, I'm Rich 👋</h1>
        <p className="hero-subtitle">
          I'm into growth, coding, and automations. This is my personal website where I share my thoughts, useful links, and resources.
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <p className="section-label">Now</p>
          <ul className="info-list">
            <li>Founder of <a href="https://sendlead.co" target="_blank" rel="noopener">sendlead.co</a></li>
            <li>Writing about B2B growth, AI, and automations</li>
            <li>Building systems and sharing what I learn</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <p className="section-label">Connect</p>
          <ul className="info-list">
            <li>Follow on <a href="https://x.com/b2b_rich" target="_blank" rel="noopener">Twitter</a> and <a href="https://www.linkedin.com/in/-richardreed/" target="_blank" rel="noopener">LinkedIn</a></li>
            <li>Watch on <a href="https://www.youtube.com/@richb2b" target="_blank" rel="noopener">YouTube</a></li>
            <li>Email me at <a href="mailto:richard@sendlead.co">richard@sendlead.co</a></li>
          </ul>
        </div>
      </section>

      <section className="posts-section">
        <h2 className="section-title">Recent Posts</h2>
        <ul className="posts-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <span className="post-date">{post.date}</span>
            </li>
          ))}
        </ul>
        <Link href="/posts" className="view-all">
          View all posts →
        </Link>
      </section>
    </>
  )
}

