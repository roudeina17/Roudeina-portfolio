import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      padding: '1rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: scrolled ? 'rgba(250,248,245,0.95)' : 'transparent',
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
    </nav>
  )
}

export default Navbar
