'use client'

const Sidebar = () =>{
    return(
        <NestedList/>
    )
}
export default Sidebar;

// ************sidebar component from MUI*********

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RestaurantViewListIcon from '@mui/icons-material/RestaurantMenu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ViewListIcon from '@mui/icons-material/ViewList';
import Image from 'next/image';

function NestedList() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const [open3, setOpen3] = React.useState(true);
  const [menu, setMenu] = React.useState(260);
    function toggle_menu(){
        if(menu==260){
            setMenu(60)
            setOpen1(false)
            setOpen2(false)
            setOpen3(false)
        }else{
            setMenu(260)
        }
    }

  return (
    <List className=' fixed top-0 left-0 bg-[#24292d]'
      sx={{ width: '100%', maxWidth:menu , minHeight:900, bgcolor: '#2f363e', color: '#828690',overflow:'hidden',transition:'.4s' }}
      component="nav"
      aria-labelledby="nested-list-subheader" 
      subheader={
        <ListSubheader className='bg-transparent flex justify-start h-[100px] items-center' component="div" id="nested-list-subheader">
          <ViewListIcon onClick={()=>{toggle_menu()}}  className='cursor-pointer text-[25px] text-[#b5b5c3] mr-4'/>
          <Image width={80} height={40} alt='pic' src={'https://png.pngtree.com/png-vector/20220727/ourmid/pngtree-cooking-logo-png-image_6089722.png'}/>
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon className='text-[#b5b5c3]' />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
  
      <ListItemButton onClick={()=>{setOpen1(!open1);setOpen2(false);setOpen3(false)}}>
        <ListItemIcon>
          <FactCheckIcon className='text-[#b5b5c3]'/>
        </ListItemIcon>
        <ListItemText primary="order" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="order list" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="order details" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={()=>{setOpen2(!open2);setOpen1(false);setOpen3(false)}}>
        <ListItemIcon>
          <RestaurantViewListIcon className='text-[#b5b5c3]'/>
        </ListItemIcon>
        <ListItemText primary="menus" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="add new menu" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="menu list" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="categories" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={()=>{setOpen3(!open3);setOpen2(false);setOpen1(false)}}>
        <ListItemIcon>
          <PeopleAltIcon className='text-[#b5b5c3]'/>
        </ListItemIcon>
        <ListItemText primary="customers" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="customers list" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <NavigateNextIcon className='text-[#b5b5c3]'/>
            </ListItemIcon>
            <ListItemText primary="members" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <ShoppingBasketIcon className='text-[#b5b5c3]'/>
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
  

    </List>
  );
}