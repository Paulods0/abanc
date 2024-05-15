import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
  }

  const labels = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
  ]

  const data = {
    labels,
    datasets: [
      {
        label: "Vendas",
        data: [
          1500, 2000, 1800, 2500, 3000, 2800, 3500, 4000, 3800, 4200, 4500,
          4800,
        ],
        borderColor: "#c64034",
        backgroundColor: "#c64034",
      },
    ],
  }
  return (
    <Card className="bg-white rounded-3xl shadow-lg w-full p-2 ">
      <CardHeader>
        <CardTitle className="text-vermelho text-lg font-semibold uppercase ">
          taxa de inflação
        </CardTitle>
        <CardDescription className="capitalize font-semibold text-zinc-600 text-[12px]">
          últimos 12 meses
        </CardDescription>
      </CardHeader>

      <CardContent className="w-full p-0">
        <Line options={options} data={data} />
      </CardContent>
    </Card>
  )
}

export default LineChart
