import Navbar from './components/Navbar';
import Header from './pages/Header';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import About from './pages/About';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default App
