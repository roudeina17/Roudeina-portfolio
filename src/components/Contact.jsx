import { motion } from 'framer-motion'

function Contact() {
  const btnBase = {
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '0.90rem',
    fontWeight: 600,
    borderRadius: '2px',
    padding: '0.85rem 2rem',
    textDecoration: 'none',
    letterSpacing: '0.08em',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minWidth: '200px',
    textAlign: 'center',
  }

  const btnFilled = {
    ...btnBase,
    color: '#FAF8F5',
    backgroundColor: '#5C4A6B',
    border: '1px solid #5C4A6B',
    flexGrow: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }

  const btnOutline = {
    ...btnBase,
    color: '#5C4A6B',
    backgroundColor: 'transparent',
    border: '1px solid #5C4A6B',
    flexGrow: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  }

  return (
    <section id="contact" style={{
      padding: '6rem 2.5rem',
      backgroundColor: '#F3EFF6',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            color: '#8B6F8B',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Me contacter
          </p>

          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '3rem',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#3D2B4F',
            margin: '0 0 1rem 0',
          }}>
            Travaillons ensemble
          </h2>

          <div style={{
            width: '50px',
            height: '1px',
            backgroundColor: '#8B6F8B',
            margin: '0 auto 2rem',
          }} />

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.2rem',
            color: '#5C4A6B',
            lineHeight: 1.8,
            marginBottom: '3rem',
          }}>
            Ingenieur a l'intersection du droit, de la qualité et de la tech. Ouverte aux opportunités, collaborations et échanges académiques.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <a
              href="mailto:roudeina.bentrad@gmail.com"
              style={btnFilled}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8B6F8B'
                e.currentTarget.style.borderColor = '#8B6F8B'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5C4A6B'
                e.currentTarget.style.borderColor = '#5C4A6B'
              }}
            >
              roudeina.bentrad@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/roudeina-ben-trad/"
              target="_blank"
              rel="noreferrer"
              style={btnOutline}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5C4A6B'
                e.currentTarget.style.color = '#FAF8F5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#5C4A6B'
              }}
            >
              LinkedIn
            </a>

            <a
              href="tel:+21653649099"
              style={btnOutline}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5C4A6B'
                e.currentTarget.style.color = '#FAF8F5'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#5C4A6B'
              }}
            >
              +216 53 649 099
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
