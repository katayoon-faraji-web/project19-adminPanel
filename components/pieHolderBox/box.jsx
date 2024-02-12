'use client'
import PieCharts from '../../components/circleCharts/chart'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { useRef ,useEffect} from 'react';
import Image from 'next/image';
const HolderPieChart = ({logo,num1,title1,num2,title2,val1,val2,per,status}) =>{
    const up = useRef()
    const down = useRef()
    useEffect(() => {
        if(status=='up'){
            down.current.style.display = 'none'
            up.current.style.display = 'flex'

        }else if(status=='down'){
            up.current.style.display = 'none'
            down.current.style.display = 'flex'
        }
    }, [status])
    return(
        <div className='w-[48%] h-[220px] p-4  rounded-md bg-[#24292d] flex flex-wrap justify-between items-center content-center'>
           <div className='w-full h-[50%]  flex flex-wrap justify-start content-center '>
                <div className='w-[60%]  h-full flex flex-wrap justify-start content-center'>
                    <span className='flex w-full text-[25px]'>{num1}</span>
                    <span className='flex w-full '>{title1}</span>
                    <div className='w-full flex justify-start items-center'>
                        <span ref={up} className='w-[25px] h-[25px] flex text-[#b5b5c3] bg-[#0f8874] text-[10px] justify-center items-center rounded-full'><NorthIcon/></span>
                        <span ref={down} className='w-[25px] h-[25px] flex text-[#b5b5c3] bg-[#fb3e7a] text-[10px] justify-center items-center rounded-full'><SouthIcon/></span>
                        <span className='ml-2 flex text-[12px]'>{per}%(15 days)</span>
                    </div>
                </div>
                <div className='w-[40%] h-full flex justify-end items-center'>
                    <Image width={70} height={70} alt='pic' src={logo}/>
                </div>
                

           </div>
           <div className='w-full h-[50%] flex flex-wrap justify-start content-center '>
                <div className='w-[60%] flex flex-wrap justify-start content-center'>
                    <span className='flex w-full text-[25px]'>{num2}</span>
                    <span className='flex w-full text-[15px]'>{title2}</span>
                </div>
                <div className='w-[40%] flex justify-end items-center'>
                    <PieCharts value1={val1} value2={val2}/>
                </div>
           </div>
        </div>
    )
}
export default HolderPieChart;