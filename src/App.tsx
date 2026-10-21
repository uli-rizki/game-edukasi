import { useState } from 'react'
import './App.css'
import AdventureScene from './components/AdventureScene'
import BottomNavigation, {
  type NavigationItem,
} from './components/BottomNavigation'
import GameHeader from './components/GameHeader'

function App() {
  const [activeTab, setActiveTab] = useState<NavigationItem>('Beranda')

  return (
    <main className="game-home">
      <div className="game-home__landscape" aria-hidden="true" />
      <GameHeader />
      <AdventureScene onStartAdventure={() => setActiveTab('Peta')} />
      <BottomNavigation activeItem={activeTab} onSelect={setActiveTab} />
    </main>
  )
}

export default App
