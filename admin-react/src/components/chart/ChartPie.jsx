import React from "react";
import { Pie, PieChart } from "recharts";

export default function ChartPie({ data, dataKey }) {
  return (
    <PieChart width={480} height={300}>
      <Pie
        data={data}
        dataKey={dataKey}
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        fill="#2196f3"
        label={({
          cx,
          cy,
          midAngle,
          innerRadius,
          outerRadius,
          value,
          index,
        }) => {
          const RADIAN = Math.PI / 180;
          // eslint-disable-next-line
          const radius = 25 + innerRadius + (outerRadius - innerRadius);
          // eslint-disable-next-line
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          // eslint-disable-next-line
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text
              x={x}
              y={y}
              fill="#8884d8"
              textAnchor={x > cx ? "start" : "end"}
              dominantBaseline="central"
            >
              {data[index].name} ({value})
            </text>
          );
        }}
      />
    </PieChart>
  );
}
