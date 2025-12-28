'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { books } from '@/data/books'

const allTags = Array.from(new Set(books.flatMap(book => book.tags))).sort()

export default function Books() {
  const [filter, setFilter] = useState<'all' | 'lifeChanging' | 'favorite'>('all')
  const [selectedTag, setSelectedTag] = useState<string>('')

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      if (filter === 'lifeChanging' && !book.lifeChanging) return false
      if (filter === 'favorite' && !book.favorite) return false
      if (selectedTag && !book.tags.includes(selectedTag)) return false

      return true
    })
  }, [filter, selectedTag])

  return (
      <div className="books-page">
      <div className="page-header">
        <h1 className="section-title">Rich's Bookshelf</h1>
        <span className="item-count">{filteredBooks.length} books</span>
      </div>

      <p className="section-subtitle">
        Books that beat my phone.
      </p>

      <div className="controls-row">
        <div className="filters-group">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="filter-select"
          >
            <option value="all">All Books</option>
            <option value="lifeChanging">★ Life-Changing</option>
            <option value="favorite">♥ Liked</option>
          </select>

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="filter-select"
          >
            <option value="">All Topics</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <Link key={book.id} href={`/books/${book.id}`} className="book-card">
            <div className="book-cover">
              <Image
                src={book.cover}
                alt={book.title}
                width={120}
                height={180}
                style={{ objectFit: 'cover' }}
                quality={60}
                loading="lazy"
              />
              {book.lifeChanging && <span className="badge life-changing">★</span>}
              {book.favorite && !book.lifeChanging && <span className="badge favorite">♥</span>}
            </div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-results">
          <p>No books match your filter.</p>
        </div>
      )}
    </div>
  )
}
