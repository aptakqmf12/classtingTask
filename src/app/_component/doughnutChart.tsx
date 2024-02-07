import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface DoughnutChartProps {
  width: number;
  correctScore: number;
  incorrectScore: number;
  useLegend?: boolean;
}

export default function DoughnutChart({
  width,
  correctScore,
  incorrectScore,

  useLegend = false,
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

  return (
    <div style={{ width }}>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: useLegend,
            },
          },
          layout: {
            padding: 2,
          },
        }}
      />
    </div>
  );
}
