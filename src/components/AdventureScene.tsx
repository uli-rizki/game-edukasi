import ExplorerCharacter from './ExplorerCharacter'
import ExploreSign from './ExploreSign'
import GameTitle from './GameTitle'
import Icon from './Icon'
import Tombol from './Tombol'

type AdventureSceneProps = {
  onStartAdventure: () => void
}

function AdventureScene({ onStartAdventure }: AdventureSceneProps) {
  return (
    <section className="adventure-scene" aria-label="Petualangan Bangun Datar">
      <div className="adventure-scene__intro">
        <GameTitle />
        <Tombol
          className="adventure-scene__start"
          icon={<Icon name="play" />}
          onClick={onStartAdventure}
        >
          Mulai Petualangan
        </Tombol>
      </div>
      <ExplorerCharacter />
      <ExploreSign />
    </section>
  )
}

export default AdventureScene
