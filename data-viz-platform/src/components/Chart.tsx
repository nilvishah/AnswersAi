import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Type for incoming props
interface ChartProps {
  selectedVariables: string[]; // allows dynamic rendering of multiple lines
}

// Static dummy dataset – each object is a monthly record with variable values
const fullData = [
  {
    name: "Apr",
    "Fleet sizing": 24,
    "Charging Growth": 12,
    "Co2 Distribution": 30,
  },
  { name: "Apr", "Fleet sizing": 24, "Charging Growth": 12 },
  { name: "May", "Fleet sizing": 45, "Charging Growth": 30 },
  { name: "Jun", "Fleet sizing": 40, "Charging Growth": 50 },
  { name: "Jul", "Fleet sizing": 89.6, "Charging Growth": 63 },
  { name: "Aug", "Fleet sizing": 55, "Charging Growth": 70 },
  { name: "Sep", "Fleet sizing": 62, "Charging Growth": 80 },
  { name: "Oct", "Fleet sizing": 70, "Charging Growth": 88 },
];

//Tooltip customization – shows a formatted box on hover
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#1f1f1f",
          border: "1px solid #333",
          borderRadius: "10px",
          padding: "12px",
          color: "#fff",
          fontSize: "0.85rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "1rem", marginBottom: "4px" }}>
          ${payload[0].value.toFixed(2)}k
        </p>
        <p style={{ color: "#aaa", margin: 0 }}>4.6% above target</p>
      </div>
    );
  }
  return null;
};

//Main chart component
const Chart: React.FC<ChartProps> = ({ selectedVariables }) => {
  console.log("📊 Chart → selectedVariables", selectedVariables); // log debug

  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={fullData} margin={{ top: 20, right: 20, bottom: 0, left: 0 }}>
          {/* Grid + axes */}
          <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
          <XAxis dataKey="name" stroke="#999" />
          <YAxis stroke="#999" />

          {/* Custom tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Vertical reference line – e.g. target month */}
          <ReferenceLine x="Jul" stroke="#a6ff03" strokeDasharray="4 4" />

          {/* Render one line per selected variable */}
          {selectedVariables.map((variable) => (
            <Line
              key={variable}
              type="monotone"
              dataKey={variable}
              stroke="#a6ff03"
              strokeWidth={2}
              dot={{ r: 5, fill: "#a6ff03" }}
              activeDot={{
                r: 7,
                fill: "#a6ff03",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
