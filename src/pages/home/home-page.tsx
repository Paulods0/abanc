import Container from "@/components/container"
import EventSection from "@/components/home/event-section"
import FinancialLiteracySection from "@/components/home/financial-literacy-section"
import HighlightSection from "@/components/home/highlight-section"
import InflationSection from "@/components/home/inflation-section"
import Slider from "@/components/home/slider"
import FadeIn from "@/components/motion/fade-in"

const HomePage = () => {
  return (
    <main className="min-h-screen mb-40 lg:mb-0 lg:pb-4 pb-16">
      <FadeIn>
        <Container className="mt-8 mb-8">
          <Slider image="/banner/banner.png" />
        </Container>

        <div className="space-y-6 h-full">
          <HighlightSection />

          <div className="w-full px-2 py-2 lg:px-6 bg-zinc-300/15">
            <EventSection />
          </div>

          <InflationSection />
          <FinancialLiteracySection />
        </div>
      </FadeIn>
    </main>
  )
}

export default HomePage
