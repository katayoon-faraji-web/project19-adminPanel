import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1',session:14},
  { name: '2',session:16},
  { name: '3',session:27},
  { name: '4',session:32},
  { name: '5',session:34},
  { name: '6',session:35},
  { name: '7',session:20},
  { name: '8',session:27},
];

const SplineArea = () => {
  return (
    <ResponsiveContainer width="100%" height="60%">
      <AreaChart  width={400} height={60} data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        
        <YAxis type="number" includeHidden tick={false} />
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area  type="monotone" dataKey="session" stroke="#fb3e7a" strokeWidth={5}  fill="#0f8874" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SplineArea;