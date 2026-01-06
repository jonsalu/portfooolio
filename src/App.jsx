
import './App.css'
import About from './components/about/about'
import Header from './components/header/header'
import Home from './components/home/home'
import Habilidades from './components/habilidades/habilidades'

function App() {
  

  return (
    <div className="app">
      <Header/>
      <Home/>
      <About/>
      <Habilidades/>
    </div>
    
  )
}

export default App
