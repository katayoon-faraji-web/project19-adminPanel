'use client'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsIcon from '@mui/icons-material/Settings';
const FirstLine = () =>{
    return(
        <div className="w-full h-[70px] rounded-lg flex justify-between items-center">
             <div className='w-[48%] h-full hidden lg:flex justify-start items-center'>
                <input type="search" placeholder='search...' spellCheck={false} className='w-full h-[40px] p-4 bg-[#24292d] text-[15px] rounded-lg text-[#b5b5c3] placeholder:text-[#b5b5c3] placeholder:text-[15px]'/>
            </div>
            <div className='w-[30%] h-full'>
                <ul className='w-full h-full flex justify-end items-center'>
                    <li className='w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><ColorBadge><NotificationsIcon/></ColorBadge></li>
                    <li className='mx-2 w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><ColorBadge2><MarkunreadIcon/></ColorBadge2></li>
                    <li className='w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><SettingsIcon/></li>
                </ul>
            </div>
            <div className='w-[20%] h-full flex justify-end items-center '>
                <span className='flex text-[15px] mr-2'>hello,katy</span>
                <BadgeAvatars/>
            </div>
        </div>
    )
}
export default FirstLine



// ****************************************
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Katy" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
      </Badge>
    </Stack>
  );
}


// ***************badge*****************


function ColorBadge({children}) {
  return (
    <Stack spacing={2} direction="row" >
      <Badge badgeContent={4} color="secondary" >
        {children}
      </Badge>
    </Stack>
  );
}
function ColorBadge2({children}) {
  return (
    <Stack spacing={2} direction="row" >
      <Badge badgeContent={18} color="secondary"  >
        {children}
      </Badge>
    </Stack>
  );
}