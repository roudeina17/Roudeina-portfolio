import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const links = [
    { label: 'A propos', href: '#about' },
    { label: 'Travaux et Recherches', href: '#presentations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: scrolled || menuOpen ? 'rgba(250,248,245,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 1px 20px rgba(61,43,31,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <a href="#hero" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.8rem',
        fontWeight: 700,
        color: '#8B6F8B',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={(e) => { e.target.style.color = '#5C4A6B' }}
      onMouseLeave={(e) => { e.target.style.color = '#8B6F8B' }}
      >
        ✦
      </a>

      {/* Desktop links */}
      {!isMobile && (
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#3D2B4F',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  transition: 'color 0.3s ease',
                  paddingBottom: '2px',
                  borderBottom: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#5C4A6B'
                  e.target.style.borderBottom = '1px solid #5C4A6B'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#3D2B4F'
                  e.target.style.borderBottom = '1px solid transparent'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Burger button */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: '#3D2B4F',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: '#3D2B4F',
            transition: 'all 0.3s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '24px',
            height: '2px',
            backgroundColor: '#3D2B4F',
            transition: 'all 0.3s ease',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      )}

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(250,248,245,0.97)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 4px 20px rgba(61,43,31,0.08)',
        }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 500,
                color: '#3D2B4F',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
