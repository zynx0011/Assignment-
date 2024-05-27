// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the necessary components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const UserLineChart = ({ userData }) => {
//   // Process user data into Chart.js format
//   const chartData = {
//     labels: userData.map((entry) => entry.rank), // Assuming timestamps are on x-axis
//     datasets: [
//       {
//         label: "Win % (Day)",
//         data: userData.map((entry) => entry.avgDailyProfit), // Assuming winPercentage is on y-axis
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//       //   {
//       //     label: "Price (Rs)",
//       //     data: userData.map((entry) => entry.price), // Assuming price is on y-axis
//       //     fill: false,
//       //     borderColor: "rgb(192, 75, 192)",
//       //     tension: 0.1,
//       //   },
//     ],
//   };

//   return (
//     <div>
//       <h2>User Line Chart</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default UserLineChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserLineChart = ({ userData }) => {
  //   console.log(userData.rank);
  // Process user data into Chart.js format
  const chartData = {
    labels: ["Start", "avgDailyProfit", "End"], // Assuming labels are composed of rank and name
    datasets: [
      {
        label: "avgDailyProfit",
        data: [0, userData.avgDailyProfit, 1000], // Assuming avgDailyProfit is on y-axis
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      // You can add more datasets here if needed
    ],
  };

  return (
    <div>
      <h2>User Line Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default UserLineChart;
