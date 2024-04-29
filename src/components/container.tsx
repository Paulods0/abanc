type Props = {
  children: React.ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="lg:w-[1200px] w-full mx-auto">{children}</div>
  )
}

export default Container
