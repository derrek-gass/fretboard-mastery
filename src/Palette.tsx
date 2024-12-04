import * as React from 'react';
import { useState } from 'react';

export default function Palette() {

  const degrees = ['I', 'ii', 'II', 'iii', 'III', 'IV', 'V', 'vi', 'VI', 'vii', 'VII'];
  const noteColors = {};
  for (const degree of degrees) {
    noteColors[degree] = '#fff';
  }
  const [swatches, setSwatches] = useState(noteColors);

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        {Object.entries(swatches).map(([degree, color]) => (
          <div key={degree} style={{backgroundColor: color, width: "25px", height: "25px", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black", margin: "1px"}}>
            {degree}
          </div>
        ))}
        </div>
    </>
  );
}
