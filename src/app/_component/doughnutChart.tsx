import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  correctScore: number;
  incorrectScore: number;
}

export default function DoughnutChart({
  correctScore,
  incorrectScore,
}: DoughnutChartProps) {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["정답", "오답"],
    datasets: [
      {
        label: "Quiz",
        data: [correctScore, incorrectScore],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}
