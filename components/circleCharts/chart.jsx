
'use client'
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Group A', value: 300},
  { name: 'Group B', value: 1200 },

];
const COLORS = ['#fb3e7a','#0f8874'];

const PieCharts = () => {
  return (
    <ResponsiveContainer className='bg-red-400' width={150} height={150}>
      <PieChart  >
        <Pie startAngle={90} endAngle={450}
          data={data}
          cx={75}
          cy={75}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            

          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieCharts;