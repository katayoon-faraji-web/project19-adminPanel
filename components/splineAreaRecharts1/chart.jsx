'use client'
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useStore from '../../zustand/store';
import { useEffect } from 'react';
import { stringToNumber } from '@syncfusion/ej2-react-maps';

const SplineArea = () => {

  let dataSource = useStore(state=>state.dataSource)
  console.log(dataSource);
  let d = dataSource[0].sidebarchart1
  let arr = d.arr

  const data = [
    { name: '1',scale:stringToNumber(arr[0])},
    { name: '2',scale:stringToNumber(arr[1])},
    { name: '3',scale:stringToNumber(arr[2])},
    { name: '4',scale:stringToNumber(arr[3])},
    { name: '5',scale:stringToNumber(arr[4])},
    { name: '6',scale:stringToNumber(arr[5])},
    { name: '7',scale:stringToNumber(arr[6])},
  ];


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