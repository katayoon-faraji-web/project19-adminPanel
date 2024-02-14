'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        day: 'Mon',
        sales:31,
        
      },
      {
        day: 'Tue',
        sales:40,
        
      },
      {
        day: 'Wed',
        sales:28,
        
      },
      {
        day: 'Thu',
        sales:51,
        
      },
      {
        day: 'Fri',
        sales:42,
        
      },
      {
        day: 'Sat',
        sales:109,
      },
      {
        day: 'Sun',
        sales:100,},
];

const AreaChartAnalysis = () => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top:0,
          right: 20,
          left: -25,
          bottom: 25,
        }}
      >
        <CartesianGrid  vertical={false}/>
        <XAxis dataKey="month" fontSize={12} stroke='white'/>
        <YAxis fontSize={12} stroke='white'/>
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area type="monotone" dataKey="sales" stroke="#fb3e7a" strokeWidth={7} fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartAnalysis;