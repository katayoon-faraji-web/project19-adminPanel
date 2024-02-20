'use client'
import FirstLine from '../../components/firstline/box'
import SecondLine from '../../components/secondline/box'
import ThirdLine from '../../components/thirdline/box'
import FourthLine from '../../components/fourthline/box'
import FifthLine from '../../components/fifthline/box'
import LastLine from '../../components/lastline/box'
import { useRef ,useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useFetch from "../../components/useFetch/usefetch";
import useStore from "../../zustand/store";
let flag=0

export default function Home() {
  let sidebar = useStore(state=>state.sidebar)
  let login_status = useStore(state=>state.login_status)
  let set_login_status = useStore(state=>state.set_login_status)
  const sidebarWidth = useStore(state=>state.sidebarWidth)
  const router = useRouter()
  const data = useFetch();
  const dataSource = useStore(state=>state.dataSource)
  const fetching = useStore(state=>state.fetching)
  useEffect(() => {
    if (data) {
      fetching(data);
    }
  }, [data]);
  // useEffect(()=>{
  //   if(login_status=='no'){
  //     router.replace('/login')
  //     set_login_status('yes')
  //   }else{
  //     router.replace('/')
  //   }}
  // ,[])
  
  const mainPage = useRef()
  if(dataSource!='' ) {
    return (
      <main ref={mainPage} className=" w-full h-fit flex flex-wrap justify-center content-start relative p-4 transition-all duration-500 pb-10">
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
 
  
}
