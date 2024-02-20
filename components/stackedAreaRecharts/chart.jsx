'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useStore from '../../zustand/store';
import { useEffect } from 'react';
import { stringToNumber } from '@syncfusion/ej2-react-maps';

const StackedAreaAchart = () => {

  let dataSource = useStore(state=>state.dataSource)
  let d = dataSource[0].sidebarchart3
  let arrfirst = d.arrfirst
  let arrreturning = d.arrreturning

  const data = [
    {
      day:'Mon',
      fisrtTime: stringToNumber(arrfirst[0]),
      Returning: stringToNumber(arrreturning[0]),
    },
    {
      day:'Tue',
      fisrtTime: stringToNumber(arrfirst[1]),
      Returning: stringToNumber(arrreturning[1]),
    },
    {
      day:'Wed',
      fisrtTime: stringToNumber(arrfirst[2]),
      Returning: stringToNumber(arrreturning[2]),
    },
    {
      day:'Thu',
      fisrtTime: stringToNumber(arrfirst[3]),
      Returning: stringToNumber(arrreturning[3]),
    },
    {
      day:'Fri',
      fisrtTime: stringToNumber(arrfirst[4]),
      Returning: stringToNumber(arrreturning[4]),
    },
    {
      day:'Sat',
      fisrtTime: stringToNumber(arrfirst[5]),
      Returning: stringToNumber(arrreturning[5]),
    },
    {
      day:'FSunri',
      fisrtTime: stringToNumber(arrfirst[6]),
      Returning: stringToNumber(arrreturning[6]),
    },
  ];
  
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
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area type="monotone" dataKey="fisrtTime"  stroke="#fb3e7a" fill="#fb3e7a" />
        <Area type="monotone" dataKey="Returning"  stroke="#0f8874" fill="#0f8874" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaAchart;