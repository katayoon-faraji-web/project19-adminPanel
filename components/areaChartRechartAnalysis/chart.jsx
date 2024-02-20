'use client'
import React from 'react';
import useStore from '../../zustand/store'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { stringToNumber } from '@syncfusion/ej2-react-maps';



const AreaChartAnalysis = () => {
  const dataSource = useStore(state=>state.dataSource)
  let d = dataSource[0].chart2analysis
  let arrscale = d.arrscale

  const data = [
    {
        day: 'Mon',
        sales:stringToNumber(arrscale[0]),
        
      },
      {
        day: 'Tue',
        sales:stringToNumber(arrscale[1]),
        
      },
      {
        day: 'Wed',
        sales:stringToNumber(arrscale[2]),
        
      },
      {
        day: 'Thu',
        sales:stringToNumber(arrscale[3]),
        
      },
      {
        day: 'Fri',
        sales:stringToNumber(arrscale[4]),
        
      },
      {
        day: 'Sat',
        sales:stringToNumber(arrscale[5]),
      },
      {
        day: 'Sun',
        sales:stringToNumber(arrscale[6]),},
];
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