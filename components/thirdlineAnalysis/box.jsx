import BarChartAnalysisGreen from '../greenChartAnalysis/chart'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ThirdLineAnalysis = () =>{
    return(
        <div className="w-full p-4 lg:p-8 h-fit flex flex-wrap justify-center items-center bg-[#0f8874] rounded-lg mt-6">
            <HolderChart t1={'34040'} t2={'Revenue'} t3={'+34040'} t4={'0.036%'}/>
            <HolderChart t1={'$967K'} t2={'Sales'} t3={'-6.20967'} t4={'2.036%'}/>
        </div>
    )
}
export default ThirdLineAnalysis;

const HolderChart = ({t1,t2,t3,t4}) =>{
    return(
        <div className='w-full lg:w-[48%] h-[200px] flex justify-center items-center content-center '>
            <div className='w-[60px] h-[60px] rounded-full bg-white mr-2  flex items-center justify-center '><EmojiEventsIcon className='flex w-[70px] h-[70px]  text-[#0f8874]'/></div>
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