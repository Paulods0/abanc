import Container from "@/components/container"
import { FaXTwitter } from "react-icons/fa6"
import { TiSocialGooglePlus } from "react-icons/ti"
import { Link, useSearchParams } from "react-router-dom"
import { BsFilePdfFill } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { Button } from "@/components/ui/button"

const SOCIAL_MEDIAS = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/",
    color: "bg-black text-white",
  },
  {
    icon: <TiSocialGooglePlus />,
    link: "https://www.google.co.ao/?hl=pt",
    color: "bg-red-600 text-white",
  },
]

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
        <div className="flex flex-col w-full">
          <h1 className="text-[#A39161] border-b pb-3 uppercase text-2xl font-semibold">
            relatórios
          </h1>

          <div className="w-full border-b pb-3 flex mt-4 justify-between items-center">
            <div className="flex items-center gap-4">
              {SOCIAL_MEDIAS.map((link, indx) => (
                <Link
                  key={indx}
                  className={`text-lg p-2 rounded-full ${link.color}`}
                  to={link.link}
                >
                  {link.icon}
                </Link>
              ))}
            </div>

            <div className="flex items-center text-vermelho gap-2 text-lg">
              <span className="text-2xl">
                <BsFilePdfFill />
              </span>
              <a href="/ABANC-PDF.pdf" download target="_blank" className="underline capitalize">
                imprimir
              </a>
            </div>
          </div>

          <div className="mt-6 text-justify">
            <p className="text-lg ">
              A ABANC produz um relatório sobre o sector bancário com
              periodicidade anual, com datas de referência a 31 de Dezembro,
              preparado com o intuito de analisar, por série temporal, a
              actividade desenvolvida pelas instituições financeiras bancárias
              em cada exercício, de um modo abrangente e profundo, sempre
              enquadrando as análises e comentários no contexto macroeconómico,
              legal e regulamentar do período em questão.
            </p>
            <br />
            <p className="text-lg text-zinc-500">
              Na sua sétima edição, este estudo permite uma comparação periódica
              do desempenho das operações bancárias e uma análise económica e
              financeira do sector, em termos globais, com o objectivo de
              melhorar o conhecimento sobre a exploração da actividade bancária.
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
        </div>
      </Container>
    </main>
  )
}

export default ReportPage