import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
export default function TeacherRadar({ data }) {
  const radar = [
    {
      subject: "教学质量",
      A: data.teachingQuality,
      fullMark: 100,
    },
    {
      subject: "教研",
      A: data.research,
      fullMark: 100,
    },
    {
      subject: "政治思想",
      A: data.politicalIdeology,
      fullMark: 100,
    },
    {
      subject: "实践",
      A: data.practical,
      fullMark: 100,
    },
    {
      subject: "纪律",
      A: data.discipline,
      fullMark: 100,
    },
    {
      subject: "评价",
      A: data.comment,
      fullMark: 100,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} aspect={2 / 1} maxHeight={400}>
      <RadarChart outerRadius={100} height={400} data={radar}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="能力"
          dataKey="A"
          stroke="#ff9800"
          fill="#ff9800"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
