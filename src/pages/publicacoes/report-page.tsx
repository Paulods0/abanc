import Container from "@/components/container"

import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom"

const REPORTS = [
  {
    value: "1",
    name: "6ª Edição - Relatorio Anual",
    file: "/abanc-1.png",
  },
  {
    value: "2",
    name: "5ª Edição - Relatorio Anual",
    file: "/abanc-2.png",
  },
]
const ReportPage = () => {
  const [report, setReport] = useSearchParams({ relatorio: "1" })
  const reportValue = report.get("relatorio")
  const handleReportChange = (value: string) => {
    setReport((prev) => {
      prev.set("relatorio", value)
      return prev
    })
  }

  const FILTERED_REPORPS = REPORTS.filter(
    (report) => report.value === reportValue
  )

  return (
    <main className="">
      <Container className="mt-8 w-full">
        <div className="mt-6 text-justify">
          <p className="text-lg ">
            A ABANC produz um relatório sobre o sector bancário com
            periodicidade anual, com datas de referência a 31 de Dezembro,
            preparado com o intuito de analisar, por série temporal, a
            actividade desenvolvida pelas instituições financeiras bancárias em
            cada exercício, de um modo abrangente e profundo, sempre enquadrando
            as análises e comentários no contexto macroeconómico, legal e
            regulamentar do período em questão.
          </p>
          <br />
          <p className="text-lg text-zinc-500">
            Na sua sétima edição, este estudo permite uma comparação periódica
            do desempenho das operações bancárias e uma análise económica e
            financeira do sector, em termos globais, com o objectivo de melhorar
            o conhecimento sobre a exploração da actividade bancária.
          </p>
        </div>

        <div className="w-full mt-6 flex flex-col">
          <div className="w-full font-semibold flex justify-between items-center border-b pb-2 mb-4 capitalize text-vermelho">
            <div>7ª edição</div>
            <div>edições anteriores</div>
          </div>

          <div className="w-full lg:grid flex flex-col-reverse items-center grid-cols-5 gap-4 place-items-start">
            <div className="w-full col-span-4 h-full lg:grid place-content-center">
              {FILTERED_REPORPS.map((report) => (
                <div key={report.value}>
                  <a
                    href={report.file}
                    download
                    target="_blank"
                    className="w-auto"
                  >
                    <img
                      loading="lazy"
                      src={report.file}
                      className="lg:w-[350px] w-full object-contain"
                      alt="abanc-relatorio"
                    />
                  </a>
                  <h4 className="underline capitalize text-center mt-2">
                    {report.name}
                  </h4>
                </div>
              ))}
            </div>

            <div className="flex lg:flex-col flex-wrap lg:place-self-start w-full gap-2">
              {REPORTS.map((file, index) => (
                <Button
                  key={index}
                  variant={"outline"}
                  className={`w-full ${
                    reportValue === (index + 1).toString()
                      ? "bg-vermelho  text-white"
                      : "text-black"
                  }`}
                  onClick={() => handleReportChange((index + 1).toString())}
                >
                  {file.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ReportPage
