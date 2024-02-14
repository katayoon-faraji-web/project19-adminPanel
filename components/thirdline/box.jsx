import AreaChart from '../areaChartRechartsMain/chart'
import BarChart from '../barChartRecharts/chart'
const ThirdLine = () =>{
    return(
        <div className='w-full h-[800px] lg:h-[500px] mt-6 flex flex-wrap justify-between items-center content-center'>
            <div className='w-full lg:w-[48%] h-[50%] lg:h-full p-4  rounded-md bg-[#24292d]'>
                <div className='w-full h-[20%] flex flex-wrap justify-between p-2 items-center'>
                    <span className='flex w-[40%] text-[20px]'>Daily Revenue</span>
                    <div className='w-[50%] h0full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[20px] text-end justify-end'>$154k</span>
                        <span className='w-full flex text-[12px] text-end justify-end'>+1.5% than last week</span>
                    </div>
                </div>
                <AreaChart/>
            </div>
            <div className='w-full lg:w-[48%] h-[50%] lg:h-full p-4 mt-4 lg:mt-0  rounded-md bg-[#0f8874]'>
                <div className='w-full h-[20%] flex flex-wrap justify-between p-2 items-center'>
                    <span className='flex w-[40%] text-[20px] text-white'>Customer Flow</span>
                    <div className='w-[30%] h0full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[20px] text-end justify-end text-white'>$2,780K</span>
                        <span className='w-full flex text-[12px] text-end justify-end text-white'>in restaurant</span>
                    </div>
                    <div className='w-[30%] h0full flex flex-wrap justify-end content-center'>
                        <span className='w-full flex text-[20px] text-end justify-end text-white'>$1,410K</span>
                        <span className='w-full flex text-[12px] text-end justify-end text-white'>online order</span>
                    </div>
                </div>
                <BarChart/>
            </div>
        </div>
    )       

}
export default ThirdLine;