import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    day:'Mon',
    fisrtTime: 11,
    Returning: 31,
  },
  {
    day:'Tue',
    fisrtTime: 32,
    Returning: 40,
  },
  {
    day:'Wed',
    fisrtTime: 45,
    Returning: 28,
  },
  {
    day:'Thu',
    fisrtTime: 32,
    Returning: 51,
  },
  {
    day:'Fri',
    fisrtTime: 34,
    Returning: 42,
  },
  {
    day:'Sat',
    fisrtTime: 52,
    Returning: 109,
  },
  {
    day:'FSunri',
    fisrtTime: 41,
    Returning: 100,
  },
];

const StackedAreaAchart = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
      
        width={500}
        height={400}
        data={data}
        margin={{
          top:0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke='transparent' />
        <XAxis dataKey="day" includeHidden tick={false}/>
        <YAxis type="number" includeHidden tick={false}/>
        <Tooltip />
        <Area type="monotone" dataKey="fisrtTime"  stroke="#fb3e7a" fill="#fb3e7a" />
        <Area type="monotone" dataKey="Returning"  stroke="#0f8874" fill="#0f8874" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaAchart;