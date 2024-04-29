import Container from "@/components/container"
import EdFinanceCard from "@/components/ed-finance-card"
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const PageEducacaoFinanceira = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
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
    <main className="w-full py-12 flex items-center justify-center flex-col">
      <Container>
        <section className="flex items-center justify-center space-x-6">
          <EdFinanceCard title="luibor" />
          <EdFinanceCard title="taxa de inflação" />

          <div className="px-4 bg-white rounded-lg shadow-lg w-[400px] p-6 flex space-y-4 flex-col">
            <div className="">
              <h2 className="text-vermelho text-lg font-semibold uppercase w-fit">
                taxa de inflação
              </h2>
              <h4 className="capitalize font-semibold text-zinc-600 text-[12px]">
                últimos 12 meses
              </h4>
              <Line options={options} data={data} />
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default PageEducacaoFinanceira
