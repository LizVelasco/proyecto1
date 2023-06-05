import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mes", "Ventas", "Gastos", "Ganancias"],
  ["Enero", 1000, 400, 200],
  ["Febrero", 1170, 460, 250],
  ["Marzo", 660, 1120, 300],
  ["Abril", 1030, 540, 350],
	["Mayo", 970, 260, 760],
];

export const options = {
  chart: {
    title: "Rendimiento de la empresa",
    subtitle: "Ventas, Gastos y Ganancias: 2023",
  },
  colors: ['#3D79F2', 'rgb(101, 56, 155)', 'rgb(226, 172, 187)'],
};

export default function Barchart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}