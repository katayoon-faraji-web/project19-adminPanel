'use client'
import BarChartAnalysis from '../../components/barChartAnlaysis/chart'
import AreaChartAnalysis from '../../components/areaChartRechartAnalysis/chart'
import useStore from '../../zustand/store';
const SecondLineAnalysis = () =>{
    const dataSource = useStore(state=>state.dataSource)
    let d = dataSource[0].chart1analysis

    return(
        <div className='w-full h-[800px] lg:h-[450px] mt-6 flex flex-wrap justify-between items-center content-center'>
            <div className='w-full lg:w-[48%] h-[50%] lg:h-full p-4 flex flex-wrap justify-center content-between  rounded-md bg-[#24292d]'>
                <div className='w-full h-[25%]  flex flex-wrap justify-start p-2 items-center'>
                    <span className='flex w-full text-[20px] border-b border-[#b5b5c3] h-[50px] items-center'>Company Analytics</span>
                    <div className='w-[30%] h-full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[12px] text-end justify-end'>users</span>
                        <span className='w-full flex text-[20px] text-end justify-end'>{d.users}K</span>
                    </div>
                    <div className='w-[30%] h-full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[12px] text-end justify-end'>sessions</span>
                        <span className='w-full flex text-[20px] text-end justify-end'>{d.session}K</span>
                    </div>
                    <div className='w-[30%] h-full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[12px] text-end justify-end'>bounce rate</span>
                        <span className='w-full flex text-[20px] text-end justify-end'>{d.bouncerate}</span>
                    </div>
                </div>
                <BarChartAnalysis/>
            </div>
            <div className='w-full lg:w-[48%] h-[50%] lg:h-full p-4 mt-4 lg:mt-0 flex flex-wrap justify-center content-between rounded-md bg-[#24292d]'>
                <div className='w-full h-[25%]  flex flex-wrap justify-start p-2 items-start  '>
                    <span className='flex w-full items-center text-[20px]  h-[50px] border-b border-[#b5b5c3]'>Daily Sales overview</span>
                </div>
                <AreaChartAnalysis/>
            </div>
      </div>
    )
} 
export default SecondLineAnalysis;