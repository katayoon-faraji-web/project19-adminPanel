'use client'
import { useEffect, useRef ,useState} from "react"
import Link from "next/link"
import useStore from "../../../zustand/store";
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation'

const LogIn = () =>{
    const router = useRouter()
    const inp1 =useRef()
    const inp2 =useRef()
    const alert =useRef()
    const alert2 =useRef()
    const alert3 =useRef()
    const user = useStore(state=>state.user)
    const log_in_to_user = useStore(state=>state.log_in_to_user)
    function login(){
        let username_value = inp1.current.value
        let pass_value = inp2.current.value
        if(username_value=='Admin' && pass_value=='Admin'){
            alert.current.style.display = 'block'
            alert2.current.style.display = 'none'
            alert3.current.style.display = 'none'
            log_in_to_user(username_value)
            router.replace("/")
        }else{
            if(username_value=='' || pass_value==''){
                if(username_value==''){
                    inp1.current.style.border = '1px solid red'
                }
                if(pass_value==''){
                    inp2.current.style.border = '1px solid red'
                }
            }else{
                const url = new URL('https://6595591004335332df8287f5.mockapi.io/users');
                    url.searchParams.append('username', username_value); 
                    fetch(url, {
                    method: 'GET',
                    headers: {'content-type':'application/json'},
                    })
                    .then(res => res.json())
                    .then(response => {
                        if(response[0].username == username_value ){
                            if(response[0].password == pass_value){
                                alert.current.style.display = 'block'
                                alert2.current.style.display = 'none'
                                alert3.current.style.display = 'none'
                                log_in_to_user(username_value)
                                router.replace("/")

                            }else if(response[0].password != pass_value){
                                alert.current.style.display = 'none'
                                alert3.current.style.display = 'none'
                                alert2.current.style.display = 'block'
                            }
                        }else{
                            alert.current.style.display = 'none'
                            alert2.current.style.display = 'none'
                            alert3.current.style.display = 'block'
                        }        
                    })
            }

        }
        
    }
    return(
        <section className="w-full h-[100vh] relative flex justify-center items-center  ">
            <div className="w-[70%] lg:w-[45%] h-[500px] flex flex-wrap justify-center  content-center font-primary relative z-30 lg:ml-56">
                <div ref={alert} className="w-full mb-4 hidden">
                    <BasicAlerts />
                </div>
                <div ref={alert2} className="w-full mb-4 hidden">
                    <BasicAlerts2 />
                </div>
                <div ref={alert3} className="w-full mb-4 hidden">
                    <BasicAlerts3 />
                </div>
                

                <Tooltip title="Admin"  placement="top-end" >
                    <input ref={inp1} type="text" placeholder="Username" required spellCheck={false} className="w-full h-[50px] rounded-md border-[#b5b5c3] text-[20px] placeholder:text-[15px] placeholder:text-[#636a73] bg-[#b5b5c3] text-[#24292d] p-4"/>
                </Tooltip>


                <Tooltip title="Admin"  placement="top-end">
                    <input ref={inp2} type="password" placeholder="Password"required spellCheck={false} className="w-full h-[50px] rounded-md border-[#b5b5c3] text-[20px] placeholder:text-[15px] my-4 placeholder:text-[#636a73] bg-[#b5b5c3] text-[#24292d] p-4" />
                </Tooltip>

                
                <button onClick={login} className="w-full h-[40px] bg-[#0f8874] text-[#b5b5c3] text-[20px] rounded-md cursor-pointer transition-all duration-500 hover:bg-[#b5b5c3] hover:text-[#0f5643] hover:border-2 hover:border-[#0e5540]">Log in</button>
                
                <span className="mt-4">do not have any account? <Link href={'/signup'} className="text-[#0f8874] underline">Sign up</Link></span>
            </div>
        </section>
    )

}
export default LogIn

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { replace } from "formik";

 function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Alert severity="success">login successful.</Alert>
      
    </Stack>
  );
 }
function BasicAlerts2() {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        
        <Alert severity="error">Wrong Password !</Alert>
      </Stack>
    );
}
function BasicAlerts3() {
    return (
      <Stack sx={{ width: '100%' }} spacing={4}>
        
        <Alert severity="error">Wrong Username !</Alert>
      </Stack>
    );
}



