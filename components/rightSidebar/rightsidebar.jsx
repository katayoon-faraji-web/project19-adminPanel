'use client'
import SplineArea from '../../components/splineArea/chart'
const RightSidebar = () =>{
    return(
        <div className="w-[23%] h-[100vh] fixed top-0 right-0 border-l-4 border-black flex flex-wrap justify-start content-start">
            <Box_chart>
                <SplineArea/>
            </Box_chart>
                
            
        </div>
    )
}
export default  RightSidebar;


const Box_chart = ({children}) =>{
    return(
        <div className="w-full h-[250px] flex justify-start items-center border border-white rounded-lg">
            <div className='w-full h-[80%] flex justify-between items-center'>
                <div className='w-[40%] flex flex-wrap justify-start content-center'>
                    <span>total sale</span>
                    <span>$254.90</span>

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

