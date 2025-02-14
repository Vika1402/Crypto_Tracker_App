import React, { useEffect } from "react";
import Chart, { CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { chartDays } from "../../Services/Constatt";
function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {
  Chart.register(CategoryScale);
  if (!historicData) {
    alert("No data Availale Here ");
  }

  useEffect(()=>{
   console.log(currency); 
  },[])

  function handleDayChange(e) {
    const daySelected = e.target.value;
    if (daySelected == 1) {
      setCoinInterval(" ");
    } else {
      setCoinInterval("daily");
    }
    setDays(e.target.value);
  }
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 mt-6 ">
      <div className="h-[500px] w-full">
        <Line
          data={{
            labels: historicData.data.prices.map((coinPrice) => {
              const date = new Date(coinPrice[0]); // Timestamp
              const time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;

              // Return time for 1-day data or date for multi-day data
              return days == 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} ${
                  days === 1 ? "Day" : "Days"
                }) in ${currency.toUpperCase()}`,
                data: historicData.data.prices.map((coinPrice) => coinPrice[1]), // Prices
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,

            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>

      <div className="flex justify-center w-full mt-10">
        <>
          <select
            className="w-full max-w-xs select select-accent"
            onChange={handleDayChange}
          >
            {chartDays.map((day, index) => {
              return (
                <option
                  selected={days == day.value}
                  key={index}
                  value={day.value}
                >
                  {day.label}
                </option>
              );
            })}
          </select>
        </>
      </div>
    </div>
  );
}

export default CoinInfo;
