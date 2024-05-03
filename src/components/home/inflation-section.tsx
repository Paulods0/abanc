import Container from "../container"
import EdFinanceCard from "./ed-finance-card"
import LineChart from "./line-chart"

const InflationSection = () => {
  return (
    <Container>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <EdFinanceCard title="luibor" />
        </div>
        <div>
          <EdFinanceCard title="taxa de inflação" />
        </div>
        <div>
          <LineChart />
        </div>
      </section>
    </Container>
  )
}

export default InflationSection
