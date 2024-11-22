import React from 'react';
import { LineChart as RechartsLineChart, CartesianGrid, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

// Custom tooltip component
const CustomTooltip = React.memo(({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-background border rounded-lg shadow-md p-3">
                <p className="text-sm font-medium text-foreground mb-1">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm text-muted-foreground">
                        {entry.value} visitors
                    </p>
                ))}
            </div>
        );
    }
    return null;
});

CustomTooltip.displayName = 'CustomTooltip';

export const LineChart = ({extraClassName}) => {
    return (
        <div className={`w-full ${extraClassName}`}>
            <ResponsiveContainer width="100%" height="100%" className={"aspect-square"}>
                <RechartsLineChart
                    data={chartData}
                    margin={{
                        left: 12,
                        right: 12,
                        top: 12,
                        bottom: 12,
                    }}
                >
                    <CartesianGrid 
                        vertical={false} 
                        stroke="hsl(var(--border))"
                        strokeDasharray="8 8"
                    />
                    <XAxis 
                        dataKey="month" 
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                    />
                    <Tooltip 
                        content={<CustomTooltip />}
                        cursor={false}
                    />
                    <Line
                        type="natural"
                        dataKey="desktop"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{
                            fill: "hsl(var(--primary))",
                            r: 4,
                            strokeWidth: 0,
                        }}
                        activeDot={{
                            r: 6,
                            fill: "hsl(var(--primary))",
                            stroke: "hsl(var(--background))",
                            strokeWidth: 2,
                        }}
                    />
                </RechartsLineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;