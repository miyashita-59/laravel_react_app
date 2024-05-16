import * as React from 'react';
import ReactDOM from 'react-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import * as Icon from '@mui/icons-material'
import { Button } from '@mui/material';

export default function App() {
  const [open, setOpen] = React.useState('');

  const handleClick = (category: string) => {
    if (open == category) {
      setOpen('');
    } else {
      setOpen(category);
    }
  };

  return (
    <>
      <Button color="secondary" variant="contained" href={`/`}>Homeに遷移ボタン</Button>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20, textAlign: 'center'}}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            TODOリスト
          </ListSubheader>
        }
      >
        <ListItemButton onClick={()=>handleClick('business')}>
          <ListItemIcon>
            <Icon.Business />
          </ListItemIcon>
          <ListItemText primary="仕事" />
        </ListItemButton>
        <Collapse in={open=='business'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{textAlign: 'left', marginLeft: 30}}>
            <ListItemText primary="テスト１" />
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClick('home')}>
          <ListItemIcon>
            <Icon.Bungalow />
          </ListItemIcon>
          <ListItemText primary="家" />
        </ListItemButton>
        <Collapse in={open=='home'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{textAlign: 'left', marginLeft: 30}}>
            <ListItemText primary="テスト２" />
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClick('often')}>
          <ListItemIcon>
            <Icon.StarBorder />
          </ListItemIcon>
          <ListItemText primary="よくやること" />
        </ListItemButton>
        <Collapse in={open=='often'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{textAlign: 'left', marginLeft: 30}}>
            <ListItemText primary="テスト３" />
          </List>
        </Collapse>

        <ListItemButton onClick={()=>handleClick('other')}>
          <ListItemIcon>
            <Icon.Article />
          </ListItemIcon>
          <ListItemText primary="その他" />
        </ListItemButton>
        <Collapse in={open=='other'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{textAlign: 'left', marginLeft: 30}}>
            <Button onClick={()=> console.log('Test')}>カテゴリ追加</Button>
          </List>
        </Collapse>
      </List>
    </>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);