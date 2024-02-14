'use client'
import React from 'react';
import { BarChart, Bar, Rectangle,Legend, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
    {
      month: 'Jan',
      year2018:50,
      year2019:80,
    },
    {
      month: 'Feb',
      year2018:70,
      year2019:95,
    },
    {
      month: 'Mar',
      year2018:130,
      year2019:150,
    },
    {
      month: 'Apr',
      year2018:180,
      year2019:210,
    },
    {
      month: 'May',
      year2018:90,
      year2019:140,
    },
    {
      month: 'Jun',
      year2018:180,
      year2019:230,
    },
    {
      month: 'Jul',
      year2018:270,
      year2019:300,
    
    },
    {
      month: 'Aug',
      year2018:220,
      year2019:280,
    
    },
    {
      month: 'Sep',
      year2018:110,
      year2019:130,
    
    },
];

const BarChartAnalysis = () => {
  return (
    <ResponsiveContainer  width="100%" height="60%" >
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false}  />
        <XAxis dataKey="month" stroke='white' fontSize={12}/>
        <YAxis type='number' domain={[0,300]}  stroke='white' fontSize={12}/>
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Bar dataKey="year2018" fill="#ffffff" barSize={5} shape={<Rectangle fill="#ffffff" stroke="#ffffff" />} />
        <Bar dataKey="year2019" fill="#fb3e7a" barSize={5} shape={<Rectangle fill="#fb3e7a" stroke="#fb3e7a" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartAnalysis;