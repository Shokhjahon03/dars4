import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import RoofingIcon from '@mui/icons-material/Roofing';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FaceIcon from '@mui/icons-material/Face';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from '@mui/material';

const Saidbar = () => {
  return (
    <>
     <Box height='100vh' sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' , position:'fixed',top:'65px'}}>
      <nav   aria-label="main mailbox folders">
        <List className=' h-dvh'>
        <Link href='/'>
        <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RoofingIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
         <Link href='/stud'>
         <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </ListItem>
         </Link>
         <Link href='/tech'>
         <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="Teachers" />
            </ListItemButton>
          </ListItem>
         </Link>
         <Link href='/acc'>
         <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon/>
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItemButton>
          </ListItem>
         </Link>
        </List>
      </nav>
      <Divider />
      {/* <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav> */}
    </Box>
    </>
  )
}

export default Saidbar
