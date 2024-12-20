import React from "react";
import Chart, { CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
function CoinInfo({ historicData, setDay, setInterval }) {
  Chart.register(CategoryScale);
  if (!historicData) {
    alert("No data Availale Here ");
  }
  return (
    <div
      id="acquisitions"
      className="flex flex-col items-center justify-center w-full p-6 mt-6 md:w-3/4"
    >
      <Line
        data={{
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {
              data: [3, 5, 7, 1, 8],
            },
            {
              data: [2, 5, 8, 1, 6],
            },
          ],
        }}
      />
    </div>
  );
}

export default CoinInfo;
