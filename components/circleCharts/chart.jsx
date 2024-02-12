
'use client'
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#b5b5c3','#0f8874'];

const PieCharts = ({value1,value2}) => {
  const data = [
    { name: 'Group A', value: value1},
    { name: 'Group B', value: value2 },
  
  ];

  return (
    <ResponsiveContainer  width={100} height={100}>
      <PieChart  >
        <Pie startAngle={90} endAngle={450}
          data={data}
          cx={50}
          cy={50}
          innerRadius={30}
          outerRadius={40}
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