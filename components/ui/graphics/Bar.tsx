import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getLanguageColorRgb } from "../../../utils/helpers/colorLanguageResolver";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  languageCount: Record<string, number>;
}

const BarChart = ({ languageCount }: BarChartProps) => {
  const data = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        label: "",
        data: Object.values(languageCount),
        backgroundColor: Object.keys(languageCount).map((language) =>
          getLanguageColorRgb(language)
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Distribución de Lenguajes en Repositorios",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
