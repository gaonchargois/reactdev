import { useState } from 'react'
import osisLogo from './assets/osis.svg'
import './App.css'
import Tweet from './Tweet'

function App() {
  const [countPos, setCountPos] = useState(0)
  const [countNeg, setCountNeg] = useState(0)
  const ResetCounts = () => {
    setCountPos(0);
    setCountNeg(0);
  }

  return (
    <>
      <div>
        <a href="http://localhost:5173/" target="_blank">
          <img src={osisLogo} className="logo osis" alt="Osis logo" />
        </a>
      </div>
      <h1>SCI OSIS</h1>
      <div className="card">
        <button onClick={() => setCountPos((count) => count + 1)}>
          Donne-moi des gâteaux : {countPos} gâteaux !
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="Tweet">
        <Tweet></Tweet>
        <div className="card">
        <button onClick={() => setCountNeg((count) => count - 1)}>
          count is {countNeg}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
      </div>
      <div className="Reset">
        <div className="card">
        <button onClick={() => ResetCounts()}>
          RESET COUNTS
        </button>
        </div>
      </div>
    </>
  )
}

export default App
