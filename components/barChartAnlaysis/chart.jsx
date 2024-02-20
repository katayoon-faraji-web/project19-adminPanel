'use client'
import React from 'react';
import useStore from '../../zustand/store';
import { BarChart, Bar, Rectangle,Legend, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';
import { stringToNumber } from '@syncfusion/ej2-react-maps';



const BarChartAnalysis = () => {
  const dataSource = useStore(state=>state.dataSource)
  let d = dataSource[0].chart1analysis
  let arr2018 = d.arr2018
  let arr2019 = d.arr2019
  const data = [
    {
      month: 'Jan',
      year2018:stringToNumber(arr2018[0]),
      year2019:stringToNumber(arr2019[0]),
    },
    {
      month: 'Feb',
      year2018:stringToNumber(arr2018[1]),
      year2019:stringToNumber(arr2019[1]),
    },
    {
      month: 'Mar',
      year2018:stringToNumber(arr2018[2]),
      year2019:stringToNumber(arr2019[2]),
    },
    {
      month: 'Apr',
      year2018:stringToNumber(arr2018[3]),
      year2019:stringToNumber(arr2019[3]),
    },
    {
      month: 'May',
      year2018:stringToNumber(arr2018[4]),
      year2019:stringToNumber(arr2019[4]),
    },
    {
      month: 'Jun',
      year2018:stringToNumber(arr2018[5]),
      year2019:stringToNumber(arr2019[5]),
    },
    {
      month: 'Jul',
      year2018:stringToNumber(arr2018[6]),
      year2019:stringToNumber(arr2019[6]),
    
    },
    {
      month: 'Aug',
      year2018:stringToNumber(arr2018[7]),
      year2019:stringToNumber(arr2019[7]),
    
    },
    {
      month: 'Sep',
      year2018:stringToNumber(arr2018[8]),
      year2019:stringToNumber(arr2019[8]),
    
    },
];
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