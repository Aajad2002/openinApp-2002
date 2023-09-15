import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { label: "Week 1", Guest: 500, User: 400 },
  { label: "Week 2", Guest: 350, User: 450 },
  { label: "Week 3", Guest: 200, User: 300 },
  { label: "Week 4", Guest: 400, User: 350 }
];
const customTicks = [0, 100, 200, 300, 400, 500];

export default function Recharts() {
  return (
    <div className="bg-white p-4 rounded-[20px] shadow-md items-center mt-6">
      <div className="section col-md-6">
        <h3 className="section-title font-bold text-[25px]">Activities</h3>
        <p className="section-title text-gray-400">May - June 2021</p>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={calculateHeight()}>
            <BarChart
              data={data}
              margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
            >
              <XAxis dataKey="label" axisLine={false} tickLine={false}/>
              <YAxis
                ticks={customTicks}
                axisLine={false}
                tickLine={false}
                domain={[0, "dataMax"]}
              />
              <CartesianGrid
                stroke="#ccc"
                strokeDasharray="0"
                horizontal={true}
                vertical={false}
              />
              <Tooltip />
              <Legend top="-13%" layout="horizontal" verticalAlign="top" align="right" iconType="circle" /> 
              <Bar dataKey="Guest" fill="#98D89E" barSize={45} radius={[5, 5, 0, 0]}/>
              <Bar dataKey="User" fill="#EE8484" barSize={45} radius={[5, 5, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// Function to calculate the height of the ResponsiveContainer based on the screen width
function calculateHeight() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    // Adjust the height for larger screens
    return 400;
  } else {
    // Use a smaller height for smaller screens
    return 300;
  }
}
