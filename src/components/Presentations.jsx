import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { presentations, axes } from '../data/presentations'

function PresentationCard({ pres, index }) {
  const [hovered, setHovered] = useState(false)

  const axisColors = {
    droit: '#6B5B8B',
    management: '#8B6F6F',
    tech: '#5B7A8B',
  }

  const color = axisColors[pres.axis] || '#8B6F8B'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#F3EFF6' : '#FFFFFF',
        border: hovered ? '1px solid #8B6F8B' : '1px solid #E8E0EE',
        borderRadius: '4px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 8px 30px rgba(139,111,139,0.15)' : '0 2px 10px rgba(0,0,0,0.04)',
        cursor: 'default',
      }}
    >
      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '0.85rem',
        color: color,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        {pres.axisLabel}
      </span>

      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.4rem',
        fontWeight: 600,
        color: '#3D2B4F',
        lineHeight: 1.3,
        margin: 0,
      }}>
        {pres.title}
      </h3>

      <div style={{
        width: hovered ? '50px' : '30px',
        height: '1px',
        backgroundColor: color,
        transition: 'width 0.3s ease',
      }} />

      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.05rem',
        color: '#5C4A6B',
        lineHeight: 1.7,
        margin: 0,
        flexGrow: 1,
      }}>
        {pres.summary}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {pres.keywords.map((kw) => (
          <span key={kw} style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.85rem',
            color: color,
            border: '1px solid ' + color,
            borderRadius: '20px',
            padding: '0.2rem 0.75rem',
            letterSpacing: '0.03em',
          }}>
            {kw}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
        <a
          href={pres.pdf}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: hovered ? '#FAF8F5' : color,
            backgroundColor: hovered ? color : 'transparent',
            border: '1px solid ' + color,
            borderRadius: '2px',
            padding: '0.6rem 1.5rem',
            textDecoration: 'none',
            display: 'inline-block',
            letterSpacing: '0.06em',
            transition: 'all 0.3s ease',
          }}
        >
          Voir la présentation
        </a>
        {pres.link && (
          <a
            href={pres.link}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: color,
              backgroundColor: 'transparent',
              border: '1px solid ' + color,
              borderRadius: '2px',
              padding: '0.6rem 1.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              letterSpacing: '0.06em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = color
              e.target.style.color = '#FAF8F5'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.color = color
            }}
          >
            Demo live
          </a>
        )}
      </div>
    </motion.div>
  )
}

function Presentations() {
  const [activeSemester, setActiveSemester] = useState(null)
  const [activeAxis, setActiveAxis] = useState('all')

  const semesterFiltered = activeSemester
    ? presentations.filter((p) => p.semester === activeSemester)
    : null

  const filtered = semesterFiltered
    ? activeAxis === 'all'
      ? semesterFiltered
      : semesterFiltered.filter((p) => p.axis === activeAxis)
    : []

  const semBtnStyle = (sem) => ({
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '1.3rem',
    fontWeight: activeSemester === sem ? 700 : 400,
    fontStyle: 'italic',
    color: activeSemester === sem ? '#FAF8F5' : '#3D2B4F',
    backgroundColor: activeSemester === sem ? '#5C4A6B' : 'transparent',
    border: '1px solid #5C4A6B',
    borderRadius: '2px',
    padding: '0.75rem 3rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.05em',
  })

  const axisBtnStyle = (id) => ({
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '1rem',
    fontWeight: activeAxis === id ? 600 : 400,
    color: activeAxis === id ? '#FAF8F5' : '#5C4A6B',
    backgroundColor: activeAxis === id ? '#5C4A6B' : 'transparent',
    border: '1px solid #8B6F8B',
    borderRadius: '20px',
    padding: '0.45rem 1.4rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    letterSpacing: '0.05em',
  })

  return (
    <section id="presentations" style={{
      padding: '6rem 2.5rem',
      backgroundColor: '#FAF8F5',
      minHeight: '60vh',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            color: '#8B6F8B',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Master MTIPI — ENSIT
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '3rem',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#3D2B4F',
            margin: 0,
          }}>
            Mes Travaux de recherche
          </h2>
          <div style={{
            width: '50px',
            height: '1px',
            backgroundColor: '#8B6F8B',
            margin: '1.5rem auto 2rem',
          }} />

          {/* S1 / S2 buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <button style={semBtnStyle('S1')} onClick={() => { setActiveSemester('S1'); setActiveAxis('all') }}>
              Semestre 1
            </button>
            <button style={semBtnStyle('S2')} onClick={() => { setActiveSemester('S2'); setActiveAxis('all') }}>
              Semestre 2
            </button>
          </div>
        </motion.div>

        {/* Axis filters — visible only when semester selected */}
        {activeSemester && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {axes.map((axis) => (
              <button key={axis.id} style={axisBtnStyle(axis.id)} onClick={() => setActiveAxis(axis.id)}>
                {axis.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Empty state */}
        {!activeSemester && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              textAlign: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.2rem',
              color: '#8B6F8B',
              fontStyle: 'italic',
              marginTop: '2rem',
            }}
          >
            Choisissez un semestre pour voir les travaux de recherche
          </motion.p>
        )}

        {/* Grid */}
        {activeSemester && (
          <motion.div
            layout
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <AnimatePresence>
              {filtered.map((pres, index) => (
                <PresentationCard key={pres.id} pres={pres} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default Presentations
