import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1',sc:14},
  { name: '2',sc:16},
  { name: '3',sc:27},
  { name: '4',sc:32},
  { name: '5',sc:34},
  { name: '6',sc:35},
  { name: '7',sc:20},
  { name: '8',sc:27},
];

const SplineArea = () => {
  return (
    <ResponsiveContainer width="100%" height="60%">
      <AreaChart  width={400} height={60} data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        
        <YAxis type="number" includeHidden tick={false} />
        <Tooltip />
        <Area  type="monotone" dataKey="sc" stroke="#fb3e7a" strokeWidth={5}  fill="#0f8874" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SplineArea;