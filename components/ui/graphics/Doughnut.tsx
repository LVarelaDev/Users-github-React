import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getLanguageColorHex } from "@/utils/helpers/colorLanguageResolver";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  languageCount: { [key: string]: number };
}

const DoughnutChart = ({ languageCount }: DoughnutChartProps) => {
  const data = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        label: "Repositorios por lenguaje",
        data: Object.values(languageCount),
        backgroundColor: Object.keys(languageCount).map(getLanguageColorHex),
        borderColor: Object.keys(languageCount).map((language) =>
          getLanguageColorHex(language)
        ),
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
