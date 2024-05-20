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
import CardScaleDownEffect from "../motion/card-scale-down"

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
    <CardScaleDownEffect>
      <Card className="bg-white rounded-3xl shadow-lg w-full p-4 ">
        <CardHeader className="mb-0 pb-5">
          <CardTitle className="text-vermelho text-lg font-semibold uppercase flex flex-col w-full rounded-full">
            taxa de inflação
            <h6 className="capitalize font-semibold text-zinc-600 text-xs">
              últimos 12 meses
            </h6>
          </CardTitle>
        </CardHeader>

        <CardContent className="w-full p-0 pb-0">
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              datasets: {
                line: {
                  indexAxis: "x",
                },
              },
            }}
            data={data}
          />
        </CardContent>
      </Card>
    </CardScaleDownEffect>
  )
}

export default LineChart
