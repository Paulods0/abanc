type Props = {
  title: string
}

const EdFinanceCard = ({ title }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 flex space-y-4 flex-col">
      <h2 className="px-4 text-white text-sm font-medium uppercase bg-zinc-700 w-fit rounded-full">
        {title}
      </h2>
      <ul className="space-y-2 capitalize text-[16px]">
        <li className=" flex justify-between items-center w-full px-3 bg-zinc-200 rounded-full">
          <span>maturidade</span>
          <span>taxa</span>
        </li>
        <li className="flex justify-between items-center w-full px-3 bg-zinc-200 rounded-full">
          <span>overnight</span>
          <span>21.54%</span>
        </li>
        <li className="flex justify-between items-center w-full px-3 bg-zinc-200 rounded-full">
          <span>1 mês</span>
          <span>8.89%</span>
        </li>
        <li className="flex justify-between items-center w-full px-3 bg-zinc-200 rounded-full">
          <span>3 meses</span>
          <span>10.97%</span>
        </li>
      </ul>
    </div>
  )
}

export default EdFinanceCard
