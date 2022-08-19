import './App.css'
import Particle from './components/Particle'
import Home from './pages/Home'
import Myself from './pages/Myself'
import Portfolio from './pages/Portfolio'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Particle />
      <Home />
      <Myself />
      <Work />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
