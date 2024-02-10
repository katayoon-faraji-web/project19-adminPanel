'use client'
// import SplineArea from '../../components/splineArea/chart'
// import SplineAreaMUI from '../../components/splineAreaMUI/chart'
import SplineAreaRecharts from '../splineAreaRecharts1/chart'
import SplineAreaRecharts2 from '../splineAreaRecharts2/chart'
import StackedAreaAchart from '../stackedAreaRecharts/chart'
const RightSidebar = () =>{
    return(
        <div className="w-[23%] h-[100vh] fixed px-4 top-0 right-0 border-l-4 border-black flex flex-wrap justify-start content-start bg-[#2f363e]">
            <Box_chart title={'total sale'} info={'$245.90'}>
                <SplineAreaRecharts/>
            </Box_chart>
            <Box_chart title={'total session'} info={'845'}>
                <SplineAreaRecharts2/>
            </Box_chart>
            <Box_chart title={'Customer rate'} info={'5.12%'}>
                <StackedAreaAchart/>
            </Box_chart>
                
            
        </div>
    )
}
export default  RightSidebar;


const Box_chart = ({children,title,info}) =>{
    return(
        <div className="w-full h-[220px]  flex flex-wrap justify-start mt-4 items-center border border-white rounded-lg ">
            <div className='w-full h-[80%] flex justify-between items-center px-4'>
                <div className='w-[30%] flex flex-wrap justify-start content-center'>
                    <span>{title}</span>
                    <span>{info}</span>
                </div>
                {children}
            </div>
            <div className='w-full h-[20%] flex justify-start items-center'>
                <span>total order 6</span>
            </div>
        </div>
    )
}








// *******first chart component from MUI***********

// import { LineChart } from '@mui/x-charts/LineChart';

// const uData = [2000, 1000, 2000, 2780, 3500, 3000, 2000];


// function SimpleAreaChart() {
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       leftAxis={null}
//         bottomAxis={null}
//       series={[{ data: uData, area: true, showMark: false , color:'#0e8a74',width:200 ,border:'6px solid black'}]}
      
//       sx={{
//         '.MuiLineElement-root': {
//           display: 'none',
//         },
//       }}
//     />
//   );
// }

