import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [2000, 1000, 2000, 2780, 3500, 3000, 2000];


function SimpleAreaChart() {
  return (
    <LineChart
      width={500}
      height={300}
      leftAxis={null}
        bottomAxis={null}
      series={[{ data: uData, area: true, showMark: false , color:'#0f8874',width:200 ,border:'6px solid black'}]}
      
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}
export default SimpleAreaChart;

