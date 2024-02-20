'use client'
import SplineAreaRecharts from '../splineAreaRecharts1/chart'
import SplineAreaRecharts2 from '../splineAreaRecharts2/chart'
import StackedAreaAchart from '../stackedAreaRecharts/chart'
import useStore from '../../zustand/store';
import { useEffect } from 'react';

const RightSidebar = () =>{
    
    let dataSource = useStore(state=>state.dataSource)
    console.log(dataSource);
    let d1 = dataSource[0].sidebarchart1
    let d2 = dataSource[0].sidebarchart2
    let d3 = dataSource[0].sidebarchart3
 
   
    return(
        <div className="w-[350px] h-[100vh] overflow-y-scroll fixed px-4 top-0 right-0 hidden xl:flex flex-wrap justify-start content-start bg-[#24292d] pt-10">
        <div className='w-full h-[190vh]'>
            <Box_chart>
                <ChartSec title={'total sale'} info={d1.totalsales}>
                    <SplineAreaRecharts/>
                </ChartSec>
                <InfoSec1/>
            </Box_chart>
            <Box_chart>
                <ChartSec title={'total session'} info={d2.totalsession}>
                    <SplineAreaRecharts2/>
                </ChartSec>
                <InfoSec2/>
            </Box_chart>
            <Box_chart>
                <ChartSec title={'Customer rate'} info={d3.customerrate}>
                    <StackedAreaAchart/>
                </ChartSec>
                <InfoSec3/>
            </Box_chart>
            <RecentActivities/>
        </div>
                
        </div>
    )
    }
    

export default  RightSidebar;


const Box_chart = ({children}) =>{
    return(
        <div className="w-full h-[220px]  flex flex-wrap justify-start mt-4 items-center border-[0.3px]  border-[#b5b5c3] rounded-lg py-2">
            {children}
        </div>
    )
}
const ChartSec = ({children,title,info}) =>{
    return(
        <div className='w-full h-[80%] flex justify-between items-center px-4 border-b border-[#b5b5c3]'>
            <div className='w-[30%] flex flex-wrap justify-start content-center'>
                <span>{title}</span>
                <span>{info}</span>
            </div>
            {children}
        </div>
    )
}
const InfoSec1 = () =>{
    return(
        <div className='w-full h-[25%] flex justify-start items-center px-2'>
            <span>6 Total order</span>
        </div>
    )
}
const InfoSec2 = () =>{
    return(
        <div className='w-full h-[25%] flex justify-start items-center '>
            <ul className='w-full h-full flex justify-start items-center'>
                <li className='w-fit p-3 bg-[#b5b5c3] rounded-lg h-[30px] flex justify-center items-center mx-2 text-[#24292d] text-[12px] hover:bg-[#0f8874] hover:text-[#b5b5c3] transition-all duration-500 cursor-pointer'>Live</li>
                <li className='w-fit p-3 bg-[#b5b5c3] rounded-lg h-[30px] flex justify-center items-center mx-2 text-[#24292d] text-[12px] hover:bg-[#0f8874] hover:text-[#b5b5c3] transition-all duration-500 cursor-pointer'>4 Visitors</li>
                <li className='w-fit p-3 bg-[#b5b5c3] rounded-lg h-[30px] flex justify-center items-center mx-2 text-[#24292d] text-[12px] hover:bg-[#0f8874] hover:text-[#b5b5c3] transition-all duration-500 cursor-pointer'>See Live View</li>
            </ul>
        </div>
    )
}
const InfoSec3 = () =>{
    return(
        <ul className='w-full h-[25%] flex justify-start items-center'>
            <li className='w-[100px] h-full flex justify-start items-center mx-2 '><span className='flex w-[10px] mr-1 h-[10px] rounded-full bg-[#fb3e7a] text-[12px]'></span>First Time</li>
            <li className='w-[100px] h-full flex justify-start items-center mx-2 '><span className='flex w-[10px] mr-1 h-[10px] rounded-full bg-[#0f8874] text-[12px]'></span>Returning</li>
        </ul>
    )
}
const RecentActivities = () =>{
    let dataSource = useStore(state=>state.dataSource)
    let d = dataSource[0].recentactivities
    let d1=d[0]
    let d2=d[1]
    let d3=d[2]
    let d4=d[3]
    let d5=d[4]

    return(
        <div className="w-full h-[600px] flex flex-wrap justify-start mt-4 content-center border border-white rounded-lg py-2">
            <Activity time={d1.date} desc={d1.des}/>
            <Activity time={d2.date} desc={d2.des}/>
            <Activity time={d3.date} desc={d3.des}/>
            <Activity time={d4.date} desc={d4.des}/>
            <Activity time={d5.date} desc={d5.des}/>
        </div>
    )

}
const Activity = ({time,desc}) =>{
    return(
        <div className='w-full h-[100px] flex justify-start items-center mt-4 px-2'>
            <span className='flex text-[20px] text-[#b5b5c3] w-[80px] '>{time}</span>
            <div className='w-[8px] mx-4 rounded-tl-md rounded-bl-md h-[80%] bg-[#fb3e7a]'></div>
            <p className='text-[12px] text-start '>{desc}</p>
        </div>
    )
}






