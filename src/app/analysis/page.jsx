'use client'
import useStore from '../../../zustand/store';
import { useRef ,useEffect } from 'react'
import FirstLine from '../../../components/firstline/box'
import SecondLineAnalysis from '../../../components/secondlineAnalysis/box'
import ThirdLineAnalysis from '../../../components/thirdlineAnalysis/box'
import FourthLineAnalysis from '../../../components/fourthlineAnalysis/box'

export default function AnalysisPage() {
  let sidebar = useStore(state=>state.sidebar)
  const sidebarWidth = useStore(state=>state.sidebarWidth)
  const AnalysisPage = useRef()
  let w =0
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      w = window.innerWidth;
      if(sidebarWidth=='220'){
        w = window.innerWidth;
        if(w<1190){
          AnalysisPage.current.style.width = '75%'
        }
        else{
          AnalysisPage.current.style.width = '62%'
        }
  
        AnalysisPage.current.style.left = '230px'
  
      }else if(sidebarWidth=='50'){
        w = window.innerWidth;
        if(w<1024){
          AnalysisPage.current.style.width = '85%'
        }
        else{
          AnalysisPage.current.style.width = '70%'
        }
        
        AnalysisPage.current.style.left = '70px'
      }
    }
  },[sidebarWidth])
  if(typeof window !== 'undefined'){
    window.addEventListener('resize',()=>{
      w = window.innerWidth;
      if(sidebarWidth=='220'){
        w = window.innerWidth;
        if(w<1190){
          AnalysisPage.current.style.width = '75%'
        }
        else{
          AnalysisPage.current.style.width = '62%'
        }
  
        AnalysisPage.current.style.left = '230px'
  
      }else if(sidebarWidth=='50'){
        w = window.innerWidth;
        console.log(AnalysisPage.current.style.width);
        if(w<1024){
          AnalysisPage.current.style.width = '85%'
        }
        else{
          AnalysisPage.current.style.width = '70%'
        }
        
        AnalysisPage.current.style.left = '70px'
      }

  })

  }
  

  return (
    <main ref={AnalysisPage} className="bg-[#2f363e] w-[62%] h-fit flex flex-wrap justify-start content-start relative left-[70px] p-4 transition-all duration-500 ">
        <FirstLine/>
        <SecondLineAnalysis/>
        <ThirdLineAnalysis/>
        <FourthLineAnalysis/>
    </main>
  );
}
