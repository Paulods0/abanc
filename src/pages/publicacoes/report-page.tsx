import Container from "@/components/container"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import { CollapsibleContent } from "@radix-ui/react-collapsible"
import { useSearchParams } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri"
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
  const reportName = FILTERED_REPORPS.find(
    (report) => report.value === report.value
  )?.name

  return (
    <main className="pb-16">
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
            <div>{reportName}</div>
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
              <Collapsible>
                <CollapsibleTrigger asChild className="mb-2">
                  <Button
                    className="w-full flex items-center gap-2"
                    variant={"outline"}
                  >
                    Edições
                    <RiArrowDropDownLine />
                  </Button>
                </CollapsibleTrigger>

                {REPORTS.map((file, index) => (
                  <CollapsibleContent key={index} asChild>
                    <button
                      className={`w-full py-2 px-1 cursor-pointer rounded-lg underline ${
                        reportValue === (index + 1).toString()
                          ? "text-vermelho"
                          : "text-black"
                      }`}
                      onClick={() => handleReportChange((index + 1).toString())}
                    >
                      {file.name}
                    </button>
                  </CollapsibleContent>
                ))}
              </Collapsible>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ReportPage
