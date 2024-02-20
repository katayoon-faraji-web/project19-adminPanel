'use client'
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useStore from '../../zustand/store';
import { stringToNumber } from '@syncfusion/ej2-react-maps';


const BarChartAnalysisGreen = () => {
  let dataSource = useStore(state=>state.dataSource)
  let d = dataSource[0].chartgreen
  const data = [
    { name: 'Page A', uv: stringToNumber(d[0])},
    { name: 'Page B', uv: stringToNumber(d[1])},
    { name: 'Page C', uv: stringToNumber(d[2])},
    { name: 'Page D', uv: stringToNumber(d[3])},
    { name: 'Page E', uv: stringToNumber(d[4])},
    { name: 'Page F', uv: stringToNumber(d[5])},
    { name: 'Page G', uv: stringToNumber(d[6])},
    { name: 'Page G', uv: stringToNumber(d[7])},
    { name: 'Page G', uv: stringToNumber(d[8])},
    { name: 'Page G', uv: stringToNumber(d[9])},
    { name: 'Page G', uv: stringToNumber(d[10])},
    { name: 'Page G', uv: stringToNumber(d[11])},
    { name: 'Page G', uv: stringToNumber(d[12])},
    { name: 'Page G', uv: stringToNumber(d[13])},
    { name: 'Page G', uv: stringToNumber(d[14])},
    { name: 'Page G', uv: stringToNumber(d[15])},
    { name: 'Page G', uv: stringToNumber(d[16])},
    { name: 'Page G', uv: stringToNumber(d[17])},
    { name: 'Page G', uv: stringToNumber(d[18])},
    { name: 'Page G', uv: stringToNumber(d[19])},
  ];
  return (
    <ResponsiveContainer width="70%" height="100%">
      <BarChart width={70} height={80} data={data}>
        <Bar dataKey="uv" fill="white" barSize={3}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartAnalysisGreen;