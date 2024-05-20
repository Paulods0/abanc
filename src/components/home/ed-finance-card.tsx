import CardScaleDownEffect from "../motion/card-scale-down"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

type Props = {
  title: string
}

const EdFinanceCard = ({ title }: Props) => {
  return (
    <CardScaleDownEffect>
      <Card className="bg-white rounded-3xl shadow-lg w-full p-4 flex flex-col">
        <CardHeader>
          <CardTitle className="text-white text-lg px-4 py-1 font-semibold uppercase bg-black/60 w-full rounded-full">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2 capitalize text-base text-zinc-500">
            <li className=" flex justify-between items-center w-full px-4 py-1 bg-zinc-200 rounded-full">
              <span className="font-medium">maturidade</span>
              <span className="font-semibold">taxa</span>
            </li>

            <li className="flex justify-between items-center w-full px-4 py-1 bg-zinc-200 rounded-full">
              <span className="font-medium">overnight</span>
              <span className="font-semibold">21.54%</span>
            </li>

            <li className="flex justify-between items-center w-full px-4 py-1 bg-zinc-200 rounded-full">
              <span className="font-medium">1 mês</span>
              <span className="font-semibold">8.89%</span>
            </li>

            <li className="flex justify-between items-center w-full px-4 py-1 bg-zinc-200 rounded-full">
              <span className="font-medium">3 meses</span>
              <span className="font-semibold">10.97%</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </CardScaleDownEffect>
  )
}

export default EdFinanceCard
