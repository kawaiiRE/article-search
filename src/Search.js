import React, { useState } from 'react'
import articles from './articles'
import './Search.css'

const Search = () => {
  const [query, setQuery] = useState('')

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const highlightText = text => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.split(regex).map((part, index) => (
      <span
        key={index}
        style={
          part.toLowerCase() === query.toLowerCase()
            ? { backgroundColor: 'yellow' }
            : {}
        }
      >
        {part}
      </span>
    ))
  }

  const filteredArticles = articles.filter(
    article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div className='search-container'>
      <div
        style={{
          display: 'flex',
          width: '100%',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ flexGrow: 1, marginRight: '20px' }}>
          <div className='input-container'>
            <input
              className='search-input'
              type='text'
              placeholder='Search...'
              value={query}
              onChange={handleChange}
            />
            {query && <p>{filteredArticles.length} articles found</p>}
          </div>
          <div className='articles-container'>
            {query &&
              filteredArticles.map((article, index) => (
                <div key={index}>
                  <h3>{highlightText(article.title)}</h3>
                  <p>{highlightText(article.content)}</p>
                  <small>{article.date}</small>
                  {index < filteredArticles.length - 1 && (
                    <hr className='article-divider' />
                  )}
                </div>
              ))}
            {!query && <p>Enter a query to find articles</p>}
          </div>
        </div>
        <div
          className='sidebar'
          style={{
            width: '250px',
            height: 'auto',
            alignSelf: 'flex-start'
          }}
        >
          <h3>Sidebar Content</h3>
          <p>Some information or links can go here.</p>
        </div>
      </div>
    </div>
  )
}

export default Search
