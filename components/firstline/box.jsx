'use client'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useStore from "../../zustand/store";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const FirstLine = () =>{
  const user = useStore(state=>state.user)
    return(
        <div className="w-full h-[70px] rounded-lg flex justify-between items-center">
             <div className='w-[48%] h-full hidden lg:flex justify-start items-center'>
                <input type="search" placeholder='search...' spellCheck={false} className='w-full h-[40px] p-4 bg-[#24292d] text-[15px] rounded-lg text-[#b5b5c3] placeholder:text-[#b5b5c3] placeholder:text-[15px]'/>
            </div>
            <div className='w-[30%] h-full '>
                <ul className='w-full h-full flex justify-end items-center'>
                    <li className='w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><ColorBadge><NotificationsIcon/></ColorBadge></li>
                    <li className='mx-2 w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><ColorBadge2><MarkunreadIcon/></ColorBadge2></li>
                    <li className='w-[50px] h-[50px] flex justify-center items-center bg-[#24292d] rounded-lg hover:bg-[#b5b5c3] hover:text-[#24292d] cursor-pointer transition-all duration-500'><SettingsIcon/></li>
                </ul>
            </div>
            <div className='w-[25%] h-full flex justify-end items-center p-4'>
                <span className='flex text-[15px] mr-2'>Hello,{user} </span>
                <div className='relative'><BackgroundLetterAvatars UN={user}/><div className="absolute -top-[30%] -right-[5%] w-full h-[100px]"><CustomizedSelects/></div></div>

            </div>
        </div>
    )
}
export default FirstLine


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


// *******************************************************
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { useRouter } from "next/navigation";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    fontSize: 15,
    marginTop:'10px',
    padding: '8px 26px 10px 12px',
    transition: theme.transitions.create(['border-color']),
    fontFamily:'font1',

  },
}));

 function CustomizedSelects() {
  const [account, setAccount] = React.useState('');
  const log_out_from_user = useStore(state=>state.log_out_from_user)
  const router = useRouter()
  const handleChange = (event) => {
    setAccount(event.target.value);
  };
  return (
    <div>
      
      <FormControl sx={{ m: 1 }} variant="standard" >
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={account}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem className='text-[15px] mt-1 '  onClick={()=>{log_out_from_user();router.replace('/login')}} value={'logout'} >log out</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}


// *************************************************
// avatar
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#fb3e7a';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

 function BackgroundLetterAvatars({UN}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(UN)} />

    </Stack>
  );
}