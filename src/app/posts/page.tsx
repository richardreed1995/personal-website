import Link from 'next/link'

const posts = [
  { title: 'The Vehicle Is All That Matters', date: 'Dec 2025', slug: 'the-vehicle-is-all-that-matters' },
  { title: 'Avoid the middle', date: 'Sep 2025', slug: 'middle' },
  { title: 'Bookend Your Day', date: 'Nov 2025', slug: 'bookend-your-day' },
]

export default function Posts() {
  return (
    <div>
      <h1 className="section-title">My Journal</h1>
      <p className="section-subtitle">A collection of thoughts that seemed smart at the time.</p>
      
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            <span className="post-date">{post.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

