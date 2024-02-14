import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 36 },
  { name: 'Page B', uv: 70 },
  { name: 'Page C', uv: 52 },
  { name: 'Page D', uv: 90 },
  { name: 'Page E', uv: 74 },
  { name: 'Page F', uv: 35 },
  { name: 'Page G', uv: 55 },
  { name: 'Page G', uv: 23 },
  { name: 'Page G', uv: 47 },
  { name: 'Page G', uv: 10 },
  { name: 'Page G', uv: 63 },
  { name: 'Page G', uv: 36 },
  { name: 'Page G', uv: 77 },
  { name: 'Page G', uv: 52 },
  { name: 'Page G', uv: 90 },
  { name: 'Page G', uv: 74 },
  { name: 'Page G', uv: 35 },
  { name: 'Page G', uv: 55 },
  { name: 'Page G', uv: 23 },
  { name: 'Page G', uv: 47 },
];

const BarChartAnalysisGreen = () => {
  return (
    <ResponsiveContainer width="70%" height="100%">
      <BarChart width={70} height={80} data={data}>
        <Bar dataKey="uv" fill="white" barSize={3}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartAnalysisGreen;