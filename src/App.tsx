import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [scales, setScales] = useState<string[]>([])
  const [selectedScale, setSelectedScale] = useState<string>('')
  const [key, setKey] = useState<string>('')

  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  useEffect(() => {
    fetch('/theory.json')
      .then(response => response.json())
      .then(data => {
        setScales(data.scales)
      })
      .catch(error => console.error('Error loading scales:', error))
  }, [])

  const handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedScale(event.target.value)
  }

  const changeKey = (event: React.ChangeEvent<HTMLSelectElement>) => { 
    setKey(event.target.value)
  }

  console.log(Object.keys(scales).forEach(key => console.log(key)));
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <select value={key} onChange={changeKey} title="select key">
          {keys.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select value={selectedScale} onChange={handleScaleChange} title="select scale">
          {Object.keys(scales).map((scale) => (
            <option key={scale} value={scale}>
              {scale}
            </option>
          ))}
        </select>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
