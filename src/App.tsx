import { useState, useEffect } from 'react'
import './App.css'
import NotesInScale from './NotesInScale'
import GuitarString from './GuitarString'
import Settings from './Settings'

type Scale = {
  name: string
  notes: number[]
}



function App() {
  const [scales, setScales] = useState<Scale[]>([])
  const [selectedScale, setSelectedScale] = useState<string>('major')
  const [key, setKey] = useState<string>('C')

  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

  const tuning = ['E', 'B', 'E', 'A', 'D', 'G', 'B', 'E']

  useEffect(() => {
    fetch('/theory.json')
      .then(response => response.json())
      .then(data => {
        handleLoadScales(data.scales)
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

  const settings = {scaleNotes, key, changeKey, selectedScale, keys, tuning};
  return (
    <>
      <h1>Scale Builder</h1>
        <Settings props={settings}/>
        {tuning.reverse().map((string) => (<GuitarString notes={scaleNotes} keys={keys} string={string} />))}
        <div className="card" style={{margin: "10px"}}>
          <select value={key} onChange={changeKey} title="select key" style={{marginBottom: "20px"}}>
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
            <NotesInScale notes={scaleNotes} />
        </div>

    </>
  )
}

export default App
