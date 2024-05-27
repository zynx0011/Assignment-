import React from "react";
import UserLineChart from "./UserLineChart";

const Leaderboard = () => {
  const data = [
    {
      rank: 1,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: 500,
      action: "Buy",
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 5,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 6,
      name: "Based on premium wit",
      calmarRatio: 3.01,
      overallProfit: 135980,
      avgDailyProfit: 185.77,
      winPercentage: 0.49,
      price: "-",
      action: "View",
    },
    {
      rank: 7,
      name: "strategy_name",
      calmarRatio: 2.76,
      overallProfit: 267867.5,
      avgDailyProfit: 218.49,
      winPercentage: 0.6,
      price: "-",
      action: "View",
    },
    {
      rank: 8,
      name: "Wait and trade_Save",
      calmarRatio: 2.62,
      overallProfit: 178252.5,
      avgDailyProfit: 161.9,
      winPercentage: 0.63,
      price: "-",
      action: "View",
    },
    {
      rank: 9,
      name: "iron condor",
      calmarRatio: 2.44,
      overallProfit: 176420,
      avgDailyProfit: 137.51,
      winPercentage: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 10,
      name: "strategy_name",
      calmarRatio: 2.04,
      overallProfit: 244555,
      avgDailyProfit: 198.66,
      winPercentage: 0.62,
      price: "-",
      action: "View",
    },
  ];

  //   const chartData = {
  //     //     labels: ["Start", "avgDailyProfit"],
  //     //     datasets: [
  //     //       {
  //     //         label: "Growth",
  //     //         data: [0, 500],
  //     //         backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
  //     //       },
  //     //       {
  //     //         label: "Growth",
  //     //         data: [100, 400],
  //     //         backgroundColor: "rgba(0, 215, 0, 4)",
  //     //       },
  //     //     ],
  //     labels: data.map((entry) => entry.rank), // Assuming timestamps are on x-axis
  //     datasets: [
  //       {
  //         label: "Calmar Ratio",
  //         data: data.map((entry) => entry.calmarRatio), // Assuming winPercentage is on y-axis
  //         fill: false,
  //         borderColor: "rgb(75, 192, 192)",
  //         tension: 0.1,
  //       },
  //       //   {
  //       //     label: "Price (Rs)",
  //       //     data: data.map((entry) => entry.winPercentage), // Assuming price is on y-axis
  //       //     fill: false,
  //       //     borderColor: "rgb(192, 75, 192)",
  //       //     tension: 0.1,
  //       //   },
  //     ],
  //   };

  //   const options = {
  //     // responsive: true,
  //     // plugins: {
  //     //   legend: {
  //     //     position: "top",
  //     //   },
  //     //   title: {
  //     //     display: true,
  //     //     text: "Doughnut Chart Example",
  //     //   },
  //     // },
  //   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">LeaderBoards</h1>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Basic Backtest</h2>
        <div className="flex items-center">
          <label htmlFor="slippage" className="mr-2">
            Slippage:
          </label>
          <select id="slippage" className="border rounded px-2 py-1">
            <option value="0%">0%</option>
            <option value="1%">1%</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      {/* <div className="mb-8">
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">
              {item.rank} {item.name}
            </h3>
            <p className="text-gray-700">
              Calmar Ratio:{" "}
              <span className="font-semibold">{item.calmarRatio}</span>
            </p>
            <p className="text-gray-700">
              Overall Profit:{" "}
              <span className="font-semibold text-green-600">
                ${item.overallProfit}
              </span>
            </p>
            <p className="text-gray-700">
              Avg. Daily Profit:{" "}
              <span className="font-semibold">{item.avgDailyProfit}</span>
            </p>
            <p className="text-gray-700">
              Win % (Day):{" "}
              <span className="font-semibold">{item.winPercentage}</span>
            </p>
            <p className="text-gray-700">
              Price (Rs): <span className="font-semibold">{item.price}</span>
            </p>
            <div>
              {" "}
              {/* <Line data={chartData} options={options} />
               */}
              <UserLineChart userData={item} />
            </div>

            <button
              className={`mt-4 py-2 px-4 rounded ${
                item.action === "View"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
