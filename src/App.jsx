import "bootstrap-icons/font/bootstrap-icons.css";
import { About, Contact, Footer, Home, Navigation, Projects } from './components/index';
import './App.scss';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
