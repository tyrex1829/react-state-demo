import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeerper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {
  return (
    <>
      <ScoreKeerper numPlayers={5} target={5} />
      {/* <EmojiClicker /> */}
      {/* <ScoreKeerper /> */}
      {/* <h1>State Demo</h1>
      <Counter /> */}
      {/* <Dumbo /> */}
    </>
  )
}

export default App
