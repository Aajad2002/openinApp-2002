import React, { useState } from "react";
import { Chart } from "primereact/chart";

export const Donut = () => {
  const [chartData] = useState({
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#98D89E", "#FFCE56", "#EE8484"],
        hoverBackgroundColor: ["#98D89E", "#FFCE56", "#EE8484"]
      }
    ]
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#495057",
          usePointStyle: true,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              const labelsAndData = [];
              for (let i = 0; i < data.labels.length; i++) {
                labelsAndData.push({
                  text: data.labels[i],
                  fillStyle: data.datasets[0].backgroundColor[i]
                });
                labelsAndData.push({
                  text: `${data.datasets[0].data[i]}%`, // Add percentage value
                  fillStyle: "transparent", // Set data color to transparent
                  lineWidth: 0
                });
              }
              return labelsAndData;
            }
            return [];
          },
          padding:10
        },
        onClick: function (e, legendItem, legend) {
          const index = legendItem.index;
          const chart = legend.chart;
          const meta = chart.getDatasetMeta(0);

          // Toggle the visibility of the corresponding data in the chart
          meta.data[index].hidden = !meta.data[index].hidden;
          chart.update();
        }
      }
    }
  });

  return (
    <div className="bg-white p-4 rounded-[20px] shadow-md items-center mt-6">
      <div className="section col-md-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <h3 className="section-title font-bold text-[25px] ">Top products</h3>
          <p className="section-title text-gray-400 ">May - June 2021</p>
        </div>
        <Chart
          type="doughnut"
          data={chartData}
          options={lightOptions}
          style={{
            position: "relative",
            width: "100%", // Set to 100% width for responsiveness
            height: "300px" // You can adjust the height as needed
          }}
        />
      </div>
    </div>
  );
};
