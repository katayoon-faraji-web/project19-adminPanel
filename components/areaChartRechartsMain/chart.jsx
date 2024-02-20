'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useStore from '../../zustand/store';
import { useEffect,useState } from 'react';
import { stringToNumber } from '@syncfusion/ej2-react-maps';


const AreaChartMian = () => {
  let dataSource = useStore(state=>state.dataSource)
    let d = {}
    let arr = []
    let dailyRevenue = ''
    let data = []
    d = dataSource[0].areachartmain
      arr = d.arr
      dailyRevenue = d.dailyRevenue
      // dataaSet(d)
      data = [
        {
          day: 'Mon',
          revenue:stringToNumber(d.arr[0]),
        },
        {
          day: 'Tue',
          revenue:stringToNumber(d.arr[1]),
        },
        {
          day: 'Wed',
          revenue:stringToNumber(d.arr[2]),
        },
        {
          day: 'Thu',
          revenue:stringToNumber(d.arr[3]),
        },
        {
          day: 'Fri',
          revenue:stringToNumber(d.arr[4]),
        },
        {
          day: 'Sat',
          revenue:stringToNumber(d.arr[5]),
        },
        {
          day: 'Sun',
          revenue:stringToNumber(d.arr[6]),
        
        },
      ];
    console.log(dataSource);

   
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
          bottom: 10,
        }}
      >
        <CartesianGrid   vertical={false}/>
        <XAxis dataKey="day" fontSize={12} stroke='white'/>
        <YAxis  fontSize={12} stroke='white'/>
        <Tooltip contentStyle={{fontSize:'12px'}}/>
        <Area type="monotone" dataKey="revenue" stroke="#0f8874" strokeWidth={7} fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartMian;