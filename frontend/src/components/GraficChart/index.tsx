import { useState } from "react";
import Chart from "react-apexcharts";

interface GraficChartProps {
  hp: number;
  atk: number;
  spatk: number;
  def: number;
  spdef: number;
  speed: number;
}

export function GraficChart({
  hp,
  atk,
  spatk,
  def,
  spdef,
  speed,
}: GraficChartProps) {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      height: 350,
    },
    xaxis: {
      categories: [
        "Health Points",
        "Attack",
        "Special Attack",
        "Defense",
        "Special Defense",
        "Speed",
      ],
      labels: {
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          colors: ["#000000"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          colors: ["#000"],
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: true,
        barHeight: "85%",
      },
    },
    series: [
      {
        name: "status",
        data: [hp, atk, spatk, def, spdef, speed],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    colors: ["#F24405", "#FA7F08", "#042940", "#DBF227", "#0CF25D", "#7A577A"], // Cores diferentes para cada barra
    legend: {
      show: false,
    },
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options} // Passa todas as opções aqui
            series={options.series}
            type="bar"
            width="600"
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
