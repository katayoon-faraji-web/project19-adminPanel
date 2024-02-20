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
  const dataSource = useStore(state=>state.dataSource)
  const AnalysisPage = useRef()

  if(dataSource!=''){
    return (
      <main ref={AnalysisPage} className="bg-[#2f363e] w-full h-fit flex flex-wrap justify-start content-start relative p-4 transition-all duration-500 ">
          <FirstLine/>
          <SecondLineAnalysis/>
          <ThirdLineAnalysis/>
          <FourthLineAnalysis/>
      </main>
    );
  }
}
