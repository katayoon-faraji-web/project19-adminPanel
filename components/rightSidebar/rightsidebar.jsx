'use client'
// import SplineArea from '../../components/splineArea/chart'
// import SplineAreaMUI from '../../components/splineAreaMUI/chart'
import SplineAreaRecharts from '../splineAreaRecharts1/chart'
import SplineAreaRecharts2 from '../splineAreaRecharts2/chart'
import StackedAreaAchart from '../stackedAreaRecharts/chart'
const RightSidebar = () =>{
    return(
        <div className="w-[350px] h-[100vh] overflow-y-scroll fixed px-4 top-0 right-0 hidden xl:flex flex-wrap justify-start content-start bg-[#24292d]">
      
           <div className='w-full h-[190vh]'>
                <Box_chart>
                    <ChartSec title={'total sale'} info={'$245.90'}>
                        <SplineAreaRecharts/>
                    </ChartSec>
                    <InfoSec1/>
                </Box_chart>
                <Box_chart>
                    <ChartSec title={'total session'} info={'845'}>
                        <SplineAreaRecharts2/>
                    </ChartSec>
                    <InfoSec2/>
                </Box_chart>
                <Box_chart>
                    <ChartSec title={'Customer rate'} info={'5.12%'}>
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
            <li className='w-[100px] h-full flex justify-start items-center mx-2 '><span className='flex w-[10px] mr-1 h-[10px] rounded-full bg-[#fb3e7a]'></span>First Time</li>
            <li className='w-[100px] h-full flex justify-start items-center mx-2 '><span className='flex w-[10px] mr-1 h-[10px] rounded-full bg-[#0f8874]'></span>Returning</li>
        </ul>
    )
}
const RecentActivities = () =>{
    return(
        <div className="w-full h-[600px] flex flex-wrap justify-start mt-4 content-center border border-white rounded-lg py-2">
            <Activity time={'10:10'} desc={'morbi quis ex eu arco auctor sagittis.by johne'}/>
            <Activity time={'08:40'} desc={'morbi quis ex eu arco auctor sagittis.by Amla'}/>
            <Activity time={'07:10'} desc={'morbi quis ex eu arco auctor sagittis.by josef'}/>
            <Activity time={'01:15'} desc={'morbi quis ex eu arco auctor sagittis.by rima'}/>
            <Activity time={'23:12'} desc={'morbi quis ex eu arco auctor sagittis.by alaxa'}/>
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






