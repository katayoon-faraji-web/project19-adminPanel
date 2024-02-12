'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    day: 'Mon',
    revenue:31,
  },
  {
    day: 'Tue',
    revenue:50,
  },
  {
    day: 'Wed',
    revenue:28,
  },
  {
    day: 'Thu',
    revenue:70,
  },
  {
    day: 'Fri',
    revenue:45,
  },
  {
    day: 'Sat',
    revenue:90,
  },
  {
    day: 'Sun',
    revenue:140,
  
  },
];

const AreaChartMian = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: -25,
          bottom: 0,
        }}
      >
        <CartesianGrid   vertical={false}/>
        <XAxis dataKey="day" fontSize={12}/>
        <YAxis  fontSize={12}/>
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area type="monotone" dataKey="revenue" stroke="#0f8874" strokeWidth={7} fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartMian;