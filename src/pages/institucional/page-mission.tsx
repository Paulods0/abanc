const texts = [
  "Representar e defender os interesses dos associados, bem como desenvolver relações de cordialidade entre os mesmos, com vista à defesa e fortalecimento do sistema bancário;",

  "Elaborar e divulgar estudos e pareceres sobre assuntos económicos, financeiros e técnicos de outra natureza, relacionados com a prática e o comércio bancário, de âmbito e interesse nacional ou regional;",

  "Colaborar com outras associações empresariais nacionais ou estrangeiras;",

  "  Representar as instituições financeiras bancárias, suas associadas, na negociação e celebração de convenções colectivas de trabalho;",

  "  Prestar assistência técnica e jurídica aos seus associados, sempre que possível;",

  "Colaborar com o Instituto de Formação Bancária e outras instituições de ensino, para a realização de acções de formação e de aperfeiçoamento profissional dirigidas à população bancária e outra de órgãos afins;",

  "Promover junto dos poderes públicos medidas destinadas à racionalização do sistema bancário;",

  "Promover acções no âmbito da protecção e segurança bancárias;",

  "Intervir como árbitro ou designar peritos quando para tal for solicitada;",

  "restar outros serviços e informações aos associados em áreas que integrem o seu objecto.",
]

const PageMission = () => {
  return (
    <main className="w-full flex lg:flex-row flex-col-reverse items-center lg:items-start gap-12">
      <div className="flex flex-col">
        <TextWrapper>
          <h1 className="text-lg text-neutral-700 font-semibold">Missão</h1>
          <p>
            A Associação Angolana de Bancos tem a finalidade de representar os
            seus associados junto das entidades responsáveis pela definição do
            quadro regulamentar em que se desenvolve a actividade bancária e
            pela elaboração da política económica, contribuindo, desse modo,
            para melhorar a qualidade de serviço da banca e procurar, também,
            desempenhar uma acção formativa e informativa, que conduza a um
            melhor relacionamento entre a banca e os seus clientes.
          </p>
        </TextWrapper>

        <TextWrapper>
          <h1 className="text-lg text-neutral-700 font-semibold">
            Objecto Social
          </h1>
          <ul className="list-disc text-base">
            A ABANC tem por objecto promover e praticar todos os actos que
            possam contribuir para o progresso técnico, económico e social das
            actividades próprias dos associados e para a prossecução e defesa
            dos interesses destes perante quaisquer entidades públicas ou
            privadas, nacionais ou estrangeiras, e nomeadamente:
            {texts.map((text, index) => (
              <li className="ml-4  lg:ml-14 mt-4" key={index}>
                {" "}
                {text}
              </li>
            ))}
          </ul>
        </TextWrapper>
      </div>

      <img
        src="/missao.jpg"
        className="lg:aspect-square object-cover w-full h-full lg:size-64 lg:object-contain "
      />
    </main>
  )
}

export default PageMission

const TextWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col mb-8 text-justify">{children}</div>
}
