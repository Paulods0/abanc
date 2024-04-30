type Props = {
  title: string
  texts: string[]
}

const FooterHeadInfo = ({ title, texts }: Props) => {
  return (
    <div className="capitalize">
      <h1 className="text-vermelho text-xs md:text-base font-bold capitalize">
        {title}
      </h1>
      <div className="lg:w-[300px] text-wrap">
        {texts.map((link, index) => (
          <p key={index} className="text-xs">
            {link}
          </p>
        ))}
      </div>
    </div>
  )
}
export default FooterHeadInfo
