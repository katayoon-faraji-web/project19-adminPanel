import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1',scale:12},
  { name: '2',scale:14},
  { name: '3',scale:9},
  { name: '4',scale:32},
  { name: '5',scale:34},
  { name: '6',scale:27},
  { name: '7',scale:15},
];

const SplineArea = () => {
  return (
    <ResponsiveContainer width="100%" height="60%">
      <AreaChart width={400} height={60} data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <YAxis type="number" includeHidden tick={false} />
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area  type="monotone" dataKey="scale" stroke=" #fb3e7a" strokeWidth={5}  fill="#0f8874" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SplineArea;