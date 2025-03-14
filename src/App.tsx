import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountPos((count) => count + 1)}>
          My Money is {countPos}€
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
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
