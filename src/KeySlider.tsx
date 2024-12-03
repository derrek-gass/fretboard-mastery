import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function valuetext(value: number) {
  return `${value}°C`;
}

export default function KeySlider(props) {
  const {key, changeKey, keys} = props.props;
  return (
    <Box sx={{ width: 250 }} style={{display: "flex"}}>
      {keys.map(item => item === key ? 
      (
        <Button style={{border: "1px solid #000", backgroundColor: "rgba(255, 0, 180, .5)", minWidth: "25px"}} key={item} value={item}>{item}</Button>
      ) : (
        <Button style={{border: "1px solid #000", minWidth: "25px"}} key={item} value={item} onClick={(item) => {changeKey(item)}}>{item}</Button>
      ))}
    </Box>
  );
}