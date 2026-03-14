import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="hero" style={{
     minHeight: 'auto',
paddingTop: '15rem',
paddingBottom: '5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 2.5rem',
      backgroundColor: '#FAF8F5',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5rem',
        maxWidth: '1100px',
        width: '100%',
      }}>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ flexShrink: 0 }}
        >
          <div style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #8B6F8B',
            boxShadow: '0 8px 40px rgba(91,74,107,0.2)',
          }}>
            <img
              src={import.meta.env.BASE_URL + 'photo.jpeg'}
              alt="Roudeina Ben Trad"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.backgroundColor = '#8B6F8B'
                e.target.parentNode.style.display = 'flex'
                e.target.parentNode.style.alignItems = 'center'
                e.target.parentNode.style.justifyContent = 'center'
                e.target.parentNode.innerHTML = '<span style="font-size:4rem;color:white">R</span>'
              }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 500,
              color: '#8B6F8B',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Master Professionnel MTIPI — ENSIT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '3.2rem',
              fontWeight: 700,
              color: '#3D2B4F',
              lineHeight: 1.1,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            Roudeina Ben Trad
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ height: '1px', backgroundColor: '#8B6F8B' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.2rem',
              color: '#5C4A6B',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: 0,
            }}
          >
          De la chimie industrielle à la proprieté intellectuelle — un parcours entre INSAT et ENSIT.           </motion.p>

          {/* Badges ecoles */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
          >
            <span style={{
              padding: '0.35rem 1rem',
              border: '1px solid #8B6F8B',
              borderRadius: '20px',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.95rem',
              color: '#5C4A6B',
              letterSpacing: '0.05em',
            }}>
              Ingenieur INSAT
            </span>
            <span style={{
              padding: '0.35rem 1rem',
              border: '1px solid #8B6F8B',
              borderRadius: '20px',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.95rem',
              color: '#5C4A6B',
              letterSpacing: '0.05em',
            }}>
              Master MTIPI — ENSIT
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}
          >
            <a
              href="#presentations"
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: '#5C4A6B',
                color: '#FAF8F5',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '2px',
                letterSpacing: '0.08em',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#8B6F8B' }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = '#5C4A6B' }}
            >
              Voir mes recherches
            </a>
            <a
              href="https://www.linkedin.com/in/roudeina-ben-trad/"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: 'transparent',
                color: '#5C4A6B',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '2px',
                border: '1.5px solid #5C4A6B',
                letterSpacing: '0.08em',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5C4A6B'
                e.target.style.color = '#FAF8F5'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = '#5C4A6B'
              }}
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
