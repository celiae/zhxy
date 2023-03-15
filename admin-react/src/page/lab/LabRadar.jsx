import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
export default function LabRadar({ data }) {
  const radar = [
    {
      subject: "学习",
      A: data.studyNum,
      fullMark: 100,
    },
    {
      subject: "运动",
      A: data.sportNum,
      fullMark: 100,
    },
    {
      subject: "沟通",
      A: data.communicationNum,
      fullMark: 100,
    },
    {
      subject: "竞赛",
      A: data.competitionNum,
      fullMark: 100,
    },
    {
      subject: "证书",
      A: data.licenseNum,
      fullMark: 100,
    },
    {
      subject: "动手",
      A: 45,
      fullMark: 100,
    },
  ];

  return (
    <ResponsiveContainer width={"100%"} aspect={2 / 1} maxHeight={300}>
      <RadarChart outerRadius={100} data={radar}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
