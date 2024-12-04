import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import KeySlider from './KeySlider';
import SwatchPicker from './SwatchPicker';
import Palette from './Palette';

export default function Settings(props) {
  const {key, keys, changeKey, scaleNostes, selectedScale, tuning} = props.props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" style={{margin: "0 auto", display: "flex", justifyContent: "center"}}>
      <List>
        <ListItem key="KeySelect" disablePadding>
          <ListItemButton>
            <KeySlider props={{key, changeKey, keys}} />
          </ListItemButton>
        </ListItem>
        {['Scale'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="paletteSelect" disablePadding>
            <Palette />
        </ListItem>   
      </List>
      <Divider />
    </Box>
  );

  return (
    <div style={{position: "absolute", top: 25, right: 0, marginRight: "25px"}}>
      <Button onClick={toggleDrawer(true)} style={{fontSize: "24px"}}>&#9776;</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}