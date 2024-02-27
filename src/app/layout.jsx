'use client'
import "./globals.css";
import Sidebar from '../../components/sidebar/sidebar'
import RightSidebar from '../../components/rightSidebar/rightsidebar'
import Contactme from './../../components/contactme/contactme'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from "react";
import useStore from '../../zustand/store';
import useFetch from "../../components/useFetch/usefetch";

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const data = useFetch();
  const fetching = useStore(state=>state.fetching)
  const dataSource = useStore(state=>state.dataSource)
  const width = useStore(state=>state.width)
  const sidebar = useStore(state=>state.sidebar)
  const left = useStore(state=>state.left)
  const set_width = useStore(state=>state.set_width)
  const set_left = useStore(state=>state.set_left)
  const set_sliderItems = useStore(state=>state.set_sliderItems)
  const homepage = useRef()
  useEffect(() => {
    if (data) {
      fetching(data);
    }
  }, [data]);
  console.log(data);
  let w = 0 
  if(typeof window !== 'undefined'){
    w = window.innerWidth
  }
  if(typeof window !== 'undefined'){
    w = window.innerWidth;
    if(w<768){
      set_sliderItems(1)
    }else if(w>=800 && w<1024){
      set_sliderItems(2)
    }else{
      set_sliderItems(3)
    }
    if(w<=1200){
      set_width('90%')
      set_left('50px')
    }

    if(w>1200){
      if(sidebar=='closed'){
        set_width('72%')
      }else{
        set_width('62%')
      }
    }
     window.addEventListener('resize',()=>{
      w = window.innerWidth;
      if(w<768){
        set_sliderItems(1)
      }else if(w>=800 && w<1024){
        set_sliderItems(2)
      }else{
        set_sliderItems(3)
      }
      
      if(w<=1200){
        set_width('90%')
        set_left('50px')
      }

      if(w>1200){
        if(sidebar=='closed'){
          set_width('72%')
        }else{
          set_width('62%')
        }
      }
    })
  }
  useEffect(() => {
    homepage.current.style.width = width
    homepage.current.style.left = left
  }, [sidebar ,width ,w]);

  let showSidebar = (pathname === "/signup" || pathname==="/login" )? false : true;
      return (
        <html lang="en">
          <body className="bg-[#2f363e] font-primary flex w-[100%] justify-start capitalize text-[#b5b5c3]">
            
            {showSidebar && <Sidebar/>}
            <div ref={homepage} className=' bg-[#2f363e] h-fit relative z-40 overflow-hidden left-[70px]'>
              {children}
            </div>
            {dataSource!='' && showSidebar && <RightSidebar/>}
            <Contactme/>
          </body>
        </html>
      );


 
    

  
}
