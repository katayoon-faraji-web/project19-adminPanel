'use client'
import FirstLine from '../../components/firstline/box'
import SecondLine from '../../components/secondline/box'
import ThirdLine from '../../components/thirdline/box'
import FourthLine from '../../components/fourthline/box'
import FifthLine from '../../components/fifthline/box'
import LastLine from '../../components/lastline/box'
import useStore from '../../zustand/store';
import { useRef ,useEffect } from 'react'
import { useRouter } from 'next/navigation'
let flag=0
export default function Home() {
  let sidebar = useStore(state=>state.sidebar)
  let login_status = useStore(state=>state.login_status)
  let set_login_status = useStore(state=>state.set_login_status)
  const sidebarWidth = useStore(state=>state.sidebarWidth)
  const mainPage = useRef()
  
  const router = useRouter()
  useEffect(()=>{
    if(login_status=='no'){
      router.replace('/login')
      set_login_status('yes')
    }else{
      router.replace('/')
    }}
    ,[])

  let w =0
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      w = window.innerWidth;
      if(sidebarWidth=='220'){
        w = window.innerWidth;
        if(w<1190){
          mainPage.current.style.width = '75%'
        }
        else{
          mainPage.current.style.width = '62%'
        }
  
        mainPage.current.style.left = '230px'
  
      }else if(sidebarWidth=='50'){
        w = window.innerWidth;
        if(w<1024){
          mainPage.current.style.width = '85%'
        }
        else{
          mainPage.current.style.width = '70%'
        }
        
        mainPage.current.style.left = '70px'
      }
    }
  },[sidebarWidth])
  if(typeof window !== 'undefined'){
    window.addEventListener('resize',()=>{
      w = window.innerWidth;
      if(sidebarWidth=='220'){
        w = window.innerWidth;
        if(w<1190){
          mainPage.current.style.width = '75%'
        }
        else{
          mainPage.current.style.width = '62%'
        }
  
        mainPage.current.style.left = '230px'
  
      }else if(sidebarWidth=='50'){
        w = window.innerWidth;
        if(w<1024){
          mainPage.current.style.width = '85%'
        }
        else{
          mainPage.current.style.width = '70%'
        }
        
        mainPage.current.style.left = '70px'
      }
    })
  }

  return (
    <main ref={mainPage} className="bg-[#2f363e] w-[62%] flex flex-wrap justify-start content-start relative left-[70px] p-4 h-fit transition-all duration-500 pb-10">
      <div className=' w-full h-full relative top-0 transition-all duration-500 flex flex-wrap justify-center content-start'>
        <FirstLine/>
        <SecondLine/>
        <ThirdLine/>
        <FourthLine/>
        <FifthLine/>
        <LastLine/>
        
      </div>
    </main>
  );
}
