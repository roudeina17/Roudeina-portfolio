import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Presentations from './components/Presentations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Presentations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App