import { useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'
import { ThemeContext } from './context/context'

function App() {
  // DARKMODE
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
