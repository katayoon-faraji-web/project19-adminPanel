'use client'
import FirstLine from '../../components/firstline/box'
import SecondLine from '../../components/secondline/box'
import ThirdLine from '../../components/thirdline/box'
import FourthLine from '../../components/fourthline/box'
import FifthLine from '../../components/fifthline/box'
import LastLine from '../../components/lastline/box'
import useStore from '../../zustand/store';
import { useRef ,useEffect } from 'react'

export default function Home() {
  let sidebar = useStore(state=>state.sidebar)
  const sidebarWidth = useStore(state=>state.sidebarWidth)
  const mainPage = useRef()
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
    <main ref={mainPage} className="bg-[#2f363e] w-[62%] flex flex-wrap justify-start content-start relative left-[70px] p-4 h-fit transition-all duration-500">
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
