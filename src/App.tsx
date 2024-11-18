import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NotesInScale from './NotesInScale'

type Scale = {
  name: string
  notes: number[]
}



function App() {
  const [scales, setScales] = useState<Scale[]>([])
  const [selectedScale, setSelectedScale] = useState<string>('major')
  const [key, setKey] = useState<string>('C')

  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  useEffect(() => {
    fetch('/theory.json')
      .then(response => response.json())
      .then(data => {
        handleLoadScales(data.scales)
        // setScales(data.scales)
      })
      .catch(error => console.error('Error loading scales:', error))
  }, [])

  const handleScaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedScale(event.target.value)
  }

  const changeKey = (event: React.ChangeEvent<HTMLSelectElement>) => { 
    setKey(event.target.value)
  }

  function handleLoadScales(data: any) {
    const temp: Scale[] = Object.entries(data).map((key) => {
      return {
        name: key[0],
        notes: key[1]
      };
    });
    setScales(temp);
}

  function getScaleNotes(intervals: number[], key) {
    return intervals.map(note => keys[(note - 1 + keys.indexOf(key)) % keys.length]);
  } 

  const currentIntervals = scales.find(scale => scale.name === selectedScale)?.notes || [];

  const scaleNotes = getScaleNotes(currentIntervals, key);
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
      <NotesInScale notes={scaleNotes} />
      <div className="card">
        <select value={key} onChange={changeKey} title="select key">
          {keys.map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <select value={selectedScale} onChange={handleScaleChange} title="select scale">
          {Object.entries(scales).map((key, value) => (
            <option key={key[1].name} value={key[1].name}>
              {key[1].name}
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
