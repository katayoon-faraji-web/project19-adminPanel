'use client'
import BarChartAnalysisGreen from '../greenChartAnalysis/chart'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useStore from '../../zustand/store';

const ThirdLineAnalysis = () =>{
    let dataSource = useStore(state=>state.dataSource)
    let d1 = dataSource[0].chart1greeninfo
    let d2 = dataSource[0].chart2greeninfo
    return(
        <div className="w-full p-4 lg:p-8 h-fit flex flex-wrap justify-center items-center bg-[#0f8874] rounded-lg mt-6">
            <HolderChart t1={d1.num1} t2={'Revenue'} t3={d1.num2} t4={d1.num3}/>
            <HolderChart t1={d2.num1} t2={'Sales'} t3={d2.num2} t4={d2.num3}/>
        </div>
    )
}
export default ThirdLineAnalysis;

const HolderChart = ({t1,t2,t3,t4}) =>{
    return(
        <div className='w-full lg:w-[48%] h-[200px] flex justify-center items-center content-center '>
            <div className='w-[60px] h-[60px] rounded-full bg-white mr-2  flex items-center justify-center '><EmojiEventsIcon className='flex w-[30px] h-[30px]  text-[#0f8874]'/></div>
            <div className='w-[100px] h-[90%]  flex flex-wrap justify-start content-center mx-2'>
                <div className='w-full h-[50%] flex flex-wrap justify-start content-start '>
                    <span className='w-full flex justify-start text-[20px] text-white'>{t1}</span>
                    <span className='w-full flex justify-start text-[12px] text-[#b5b5c3]'>{t2}</span>
                </div>
                <div className='w-full h-[50%] flex flex-wrap justify-start content-start'>
                    <span className='flex w-full justify-start text-[20px] text-white'>{t3}</span>
                    <ArrowDropDownIcon className='text-white'/>
                    <span className='flex w-full justify-start text-[15px] text-[#b5b5c3]'>{t4}</span>
                </div>
            </div>
            <div className='w-[170px] h-full flex justify-center'>
                <BarChartAnalysisGreen/>
            </div>
        </div>
    )
}