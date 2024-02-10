import PieCharts from '../../components/circleCharts/chart'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Image from 'next/image';
const HolderPieChart = ({logo}) =>{
    return(
        <div className='w-[48%] h-[170px] rounded-md bg-[#2f363e] flex flex-wrap justify-between items-center content-center'>
           <div className='w-[50%] h-full flex flex-wrap justify-start content-center bg-yellow-500'>
            <span>89</span>
            <span>total order</span>
           </div>
           <PieCharts />
        </div>
    )
}
export default HolderPieChart;