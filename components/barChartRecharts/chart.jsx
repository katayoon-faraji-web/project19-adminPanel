'use client'
import React from 'react';
import { BarChart, Bar, Rectangle,Legend, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import useStore from '../../zustand/store';
import { useEffect } from 'react';
import { stringToNumber } from '@syncfusion/ej2-react-maps';


const BarChartMain = () => {
  let dataSource = useStore(state=>state.dataSource)
  let d = dataSource[0].barchartmain
  let arronline = d.arronline
  let arrrestaurant = d.arrrestaurant

  
  

  const data = [
    {
      day: 'Mon',
      onlineOrder:stringToNumber(arronline[0]),
      inRestaurant:stringToNumber(arrrestaurant[0]),
    },
    {
      day: 'Tue',
      onlineOrder:stringToNumber(arronline[1]),
      inRestaurant:stringToNumber(arrrestaurant[1]),
    },
    {
      day: 'Wed',
      onlineOrder:stringToNumber(arronline[2]),
      inRestaurant:stringToNumber(arrrestaurant[2]),
    },
    {
      day: 'Thu',
      onlineOrder:stringToNumber(arronline[3]),
      inRestaurant:stringToNumber(arrrestaurant[3]),
    },
    {
      day: 'Fri',
      onlineOrder:stringToNumber(arronline[4]),
      inRestaurant:stringToNumber(arrrestaurant[4]),
    },
    {
      day: 'Sat',
      onlineOrder:stringToNumber(arronline[5]),
      inRestaurant:stringToNumber(arrrestaurant[5]),
    },
    {
      day: 'Sun',
      onlineOrder:stringToNumber(arronline[6]),
      inRestaurant:stringToNumber(arrrestaurant[6]),
    
    },
  ];
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