// Import all of the dependencies
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

// Navbar Component
function Nav () {
  // Make use of React hooks to use state
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  // UpdateWidth function
  const updateWidth = () => {
    const newWidth = window.innerWidth

    if (open && newWidth > 991) {
      setOpen(false)
    }
    setWidth(newWidth)
  }

  // Toggle the navbar function
  const toggleNav = () => {
    setOpen(!open)
  }

  // Use Effect hook for component did mount and component will unmount
  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-2'>
      <Link className='navbar-brand' to='/'>
        Google Books
      </Link>
      <button
        onClick={toggleNav}
        className='navbar-toggler'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div
        className={`${open ? '' : 'collapse '}navbar-collapse`}
        id='navbarNav'
      >
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link
              onClick={toggleNav}
              className={
                window.location.pathname === '/'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to='/'
            >
              Search
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              onClick={toggleNav}
              className={
                window.location.pathname === '/saved'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              to='/saved'
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
