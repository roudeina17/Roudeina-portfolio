import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function TimelineItem({ year, title, place, description, isLeft, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingLeft: isLeft ? '0' : '50%',
        paddingRight: isLeft ? '50%' : '0',
        marginBottom: '2rem',
        position: 'relative',
      }}
    >
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8E0EE',
        borderLeft: '3px solid ' + color,
        borderRadius: '4px',
        padding: '1.5rem',
        maxWidth: '380px',
        width: '100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
      }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '0.85rem',
          color: color,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          {year}
        </span>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.2rem',
          fontWeight: 600,
          color: '#3D2B4F',
          margin: '0.4rem 0 0.2rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1rem',
          color: '#8B6F8B',
          margin: '0 0 0.5rem',
          fontStyle: 'italic',
        }}>
          {place}
        </p>
        {description && (
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: '#5C4A6B',
            lineHeight: 1.6,
            margin: 0,
          }}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

function About() {
  const [showTimeline, setShowTimeline] = useState(false)
  const [showSkills, setShowSkills] = useState(false)

  const skills = [
    { category: 'Droit & PI', items: ['Droit d auteur', 'Propriete intellectuelle', 'RGPD', 'Licences libres', 'Audit PI'] },
    { category: 'Management & Qualite', items: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'AMDEC', 'PDCA', 'Lean', 'Six Sigma', 'Audit interne'] },
    { category: 'Tech & Data', items: ['MongoDB', 'React', 'Node.js', 'Express', 'Python', 'Data Cleaning'] },
  ]

  const timeline = [
    { year: "2025 — 2026", title: "Ingenieure Qualite", place: "Sotucoupe, Fouchana", description: "Controle qualite et gestion des processus de production", color: '#8B6F8B', isLeft: true },
    { year: "Aujourd'hui", title: "Master MTIPI", place: "ENSIT, Tunisie", description: "Management des Techniques Intelligentes et Propriete Industrielle", color: '#8B6F8B', isLeft: false },
    { year: "Aujourd'hui", title: "Enseignement secondaire", place: "Ben Arous", description: "Preparation de supports de cours, exercices pratiques et evaluations personnalisees", color: '#6B7B8B', isLeft: true },
    { year: "2019 — 2022", title: "Ingenieure Qualite Produit", place: "Tunisie Porcelaine, Naassen", description: "Management d'equipe qualite, analyses terrain, plans d'action et indicateurs de conformite", color: '#8B6F6F', isLeft: false },
    { year: "2018 — 2019", title: "Ingenieure Production & Qualite", place: "Urban Food, Mghira", description: "Gestion de la production, coordination des services et pilotage des prestataires", color: '#6B8B6F', isLeft: true },
    { year: "2011 — 2016", title: "Ingenieure Chimie Industrielle", place: "INSAT, Tunisie", description: "Diplome d'ingenieur en chimie industrielle", color: '#8B6F8B', isLeft: false },
  ]

  return (
    <section id="about" style={{
      padding: '6rem 2.5rem',
      backgroundColor: '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            color: '#8B6F8B',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Qui suis-je
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '3rem',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#3D2B4F',
            margin: 0,
          }}>
            A propos
          </h2>
          <div style={{
            width: '50px',
            height: '1px',
            backgroundColor: '#8B6F8B',
            margin: '1.5rem auto 0',
          }} />
        </motion.div>

        {/* Citation */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            margin: '0 auto 3rem',
            maxWidth: '800px',
            padding: '2rem 2.5rem',
            backgroundColor: '#F3EFF6',
            borderLeft: '3px solid #8B6F8B',
            borderRadius: '2px',
          }}
        >
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            color: '#3D2B4F',
            lineHeight: 1.8,
            margin: '0 0 1rem 0',
          }}>
            Le futur appartient a ceux qui apprennent, désapprennent et réapprennent.
          </p>
          <cite style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1rem',
            color: '#8B6F8B',
            letterSpacing: '0.08em',
            fontStyle: 'normal',
            display: 'block',
textAlign: 'right',
          }}>
            — Alvin Toffler
          </cite>
        </motion.blockquote>

        {/* Toggle parcours */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              fontStyle: 'italic',
              color: showTimeline ? '#FAF8F5' : '#3D2B4F',
              backgroundColor: showTimeline ? '#5C4A6B' : 'transparent',
              border: '1px solid #5C4A6B',
              borderRadius: '2px',
              padding: '0.75rem 3rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              letterSpacing: '0.05em',
            }}
          >
            {showTimeline ? 'Masquer le parcours' : 'Voir mon parcours'}
          </button>
        </div>

        {/* Timeline */}
        <AnimatePresence>
          {showTimeline && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', marginBottom: '5rem' }}
            >
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '1px',
                backgroundColor: '#E8E0EE',
                transform: 'translateX(-50%)',
              }} />
              {timeline.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.8rem',
            fontWeight: 600,
            fontStyle: 'italic',
            color: '#3D2B4F',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          Compétences
        </motion.h3>

        {/* Skills */}
<div style={{ textAlign: 'center', marginBottom: '3rem' }}>
  <button
    onClick={() => setShowSkills(!showSkills)}
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '1.3rem',
      fontWeight: 600,
      fontStyle: 'italic',
      color: showSkills ? '#FAF8F5' : '#3D2B4F',
      backgroundColor: showSkills ? '#5C4A6B' : 'transparent',
      border: '1px solid #5C4A6B',
      borderRadius: '2px',
      padding: '0.75rem 3rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.05em',
    }}
  >
    {showSkills ? 'Masquer les compétences' : 'Voir mes compétences'}
  </button>
</div>

<AnimatePresence>
  {showSkills && (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
      }}
    >
      {skills.map((group, i) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          style={{
            padding: '2rem',
            border: '1px solid #E8E0EE',
            borderRadius: '4px',
            backgroundColor: '#FAF8F5',
          }}
        >
          <h4 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#3D2B4F',
            marginBottom: '1.2rem',
            letterSpacing: '0.05em',
          }}>
            {group.category}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {group.items.map((item) => (
              <span key={item} style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.95rem',
                color: '#5C4A6B',
                border: '1px solid #8B6F8B',
                borderRadius: '20px',
                padding: '0.25rem 0.85rem',
              }}>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </section>
  )
}

export default About
