import React, { useState } from 'react';
import { Sketch } from '@uiw/react-color';

export default function SwatchPicker() {
const [hex, setHex] = useState("#fff");
  return (
    <Sketch
      style={{ marginLeft: 20 }}
      color={hex}
      onChange={(color) => {
        setHex(color.hex);
      }}
    />
  );
}

