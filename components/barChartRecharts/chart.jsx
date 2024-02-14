'use client'
import React from 'react';
import { BarChart, Bar, Rectangle,Legend, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
    {
        day: 'Mon',
        onlineOrder:55,
        inRestaurant:70,
      },
      {
        day: 'Tue',
        onlineOrder:71,
        inRestaurant:45,
      },
      {
        day: 'Wed',
        onlineOrder:80,
        inRestaurant:51,
      },
      {
        day: 'Thu',
        onlineOrder:100,
        inRestaurant:58,
      },
      {
        day: 'Fri',
        onlineOrder:89,
        inRestaurant:59,
      },
      {
        day: 'Sat',
        onlineOrder:98,
        inRestaurant:59,
      },
      {
        day: 'Sun',
        onlineOrder:110,
        inRestaurant:61,
      
      },
];

const BarChartMain = () => {
  return (
    <ResponsiveContainer  width="100%" height="80%">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: -20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis dataKey="day" stroke='white' fontSize={12}/>
        <YAxis type='number' domain={[0,120]}  stroke='white' fontSize={12}/>
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Bar dataKey="inRestaurant" fill="#ffffff" shape={<Rectangle fill="#ffffff" stroke="#ffffff" />} />
        <Bar dataKey="onlineOrder" fill="#fb3e7a" shape={<Rectangle fill="#fb3e7a" stroke="#fb3e7a" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartMain;