import React from 'react';
import { LineChart, Line, ResponsiveContainer,YAxis,XAxis } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 20,

  },
  {
    name: 'Tue',
    uv: 30,

  },
  {
    name: 'Wed',
    uv: 20,

  },
  {
    name: 'Thu',
    uv: 50,

  },
 
];
const data2=[
    {
        name: 'Mon',
        uv: 50,
    
      },
      {
        name: 'Tue',
        uv: 20,
    
      },
      {
        name: 'Wed',
        uv: 30,
    
      },
      {
        name: 'Thu',
        uv: 20,
    
      },
]

const LineChartSmall = ({d,color}) => {
  return (
    <ResponsiveContainer width="100%" height="100%" >        
      <LineChart width={300} height={100} data={d} >
        <Line type="monotone" dataKey="uv" stroke={color} strokeWidth={2} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartSmall;