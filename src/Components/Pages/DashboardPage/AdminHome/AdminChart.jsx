import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";



const AdminChart = () => {
  


    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group D', value: 200 },
        { name: 'Group D', value: 200 },

    ];
    const COLORS = ["#0088FE", "#E5B8F4","#00C49F", "#CBB279", "#FFBB28", "#FF8042", "#537188","#E1D4BB", "#2D033B","#810CA8","#EEEEEE",];

   


    return (
   <div>
   
         <PieChart width={400} height={400} className="box bg-[#fce8c2]">
            <Tooltip></Tooltip>
      
            <Pie
            className=""
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
   </div>
    );
};

export default AdminChart;