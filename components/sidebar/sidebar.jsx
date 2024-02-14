'use client'

const Sidebar = () =>{
    return(
        <NestedList/>
    )
}
export default Sidebar;

// ************sidebar component from MUI*********

import * as React from 'react';
import Link from 'next/link';
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
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Image from 'next/image';
import useStore from '../../zustand/store';
import { useRef } from 'react';
function NestedList() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [menu, setMenu] = React.useState(260);
  const sidebarHolder =useRef()
    let sidebar = useStore(state=>state.dropdown)
    const close_sidebar = useStore(state=>state.close_sidebar)
    const open_sidebar = useStore(state=>state.open_sidebar)
    const sidebarWidth = useStore(state=>state.sidebarWidth)
    const setSideBarWidth = useStore(state=>state.setSideBarWidth)
    
    function toggle_menu(){
        if(sidebarWidth==220){
            setSideBarWidth(50)
            setOpen1(false)
            setOpen2(false)
            setOpen3(false)
            close_sidebar()
            sidebarHolder.current.style.width = '50px'

        }else{
          setSideBarWidth(220)
          open_sidebar()
          sidebarHolder.current.style.width = '220px'
        }
    }


  return (
   <div ref={sidebarHolder} className='w-[50px] fixed top-0 left-0 h-[100vh] transition-all duration-500 bg-[#24292d] text-[#b5b5c3]'>
      <List
      sx={{ width: '100%',height:'100%',position:'absolute',color: '#b5b5c3',overflow:'hidden',transition:'.4s',padding:'0' }}
      component="nav"
      aria-labelledby="nested-list-subheader" 
      subheader={
        <ListSubheader className='bg-[#2f363e] flex justify-start h-[80px] items-center' component="div" id="nested-list-subheader">
          <ViewListIcon onClick={()=>{toggle_menu()}}  className='cursor-pointer text-[35px] text-[#b5b5c3] mr-4'/>
          <Image  width={80} height={40} alt='pic' src={'https://cdn-icons-png.freepik.com/256/10952/10952201.png'}/>
        </ListSubheader>
      }
    >
      <Link href={'/'}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon className='text-[#b5b5c3]' />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>

      <Link href={'/analysis'}>
        <ListItemButton >
          <ListItemIcon>
            <ShowChartIcon  className='text-[#b5b5c3]'/>
          </ListItemIcon>
          <ListItemText primary="Analysis" />
        </ListItemButton>
      </Link>
  
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
   </div>
  );
}