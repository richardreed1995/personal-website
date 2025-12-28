import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { books } from '@/data/books'

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const book = books.find(b => b.id === id)

  if (!book) {
    notFound()
  }

  return (
    <article className="book-detail">
      <Link href="/books" className="back-link">
        ← Back to books
      </Link>
      
      <div className="book-detail-header">
        <div className="book-detail-cover">
          <Image
            src={book.cover}
            alt={book.title}
            width={140}
            height={210}
            style={{ objectFit: 'cover' }}
            quality={70}
            priority
          />
        </div>
        <div className="book-detail-info">
          <h1 className="section-title">{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>
          <div className="book-detail-tags">
            {book.tags.map(tag => (
              <span key={tag} className="book-tag">{tag}</span>
            ))}
            {book.lifeChanging && <span className="book-tag highlight">★ Life-Changing</span>}
            {book.favorite && <span className="book-tag highlight">♥ Liked</span>}
          </div>
        </div>
      </div>

      <div className="book-detail-content">
        <h2>Summary</h2>
        <p>{book.summary}</p>

        <h2>What I Learned</h2>
        <ul className="learnings-list">
          {book.learnings.map((learning, index) => (
            <li key={index}>{learning}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }))
}

