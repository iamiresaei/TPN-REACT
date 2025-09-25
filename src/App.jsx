// Import Component File
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { OptionCard } from './components/OptionCard';
import { Country } from './components/Country';
import { Service } from './components/Service';
import { Connection } from './components/Connection';
import { Footer } from './components/Footer';

// Import CSS File
import './styles/style.css';
import './styles/responsive.css'
import './styles/font.css'
import './styles/fontawesome/css/all.css'

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <Banner />
        <OptionCard />
        <Country />
        <Service />
        <Connection />
      </main>
      <Footer />
      <p className='developer'>.Copyright © 2024  iamiresaei . All rights reserved</p>
    </div>
  )
}

export default App
