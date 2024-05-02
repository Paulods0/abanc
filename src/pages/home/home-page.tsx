import Container from "@/components/container"
import EventSection from "@/components/home/event-section"
import FinancialLiteracySection from "@/components/home/financial-literacy-section"
import HighlightSection from "@/components/home/highlight-section"
import InflationSection from "@/components/home/inflation-section"
import Slider from "@/components/home/slider"
import FadeIn from "@/components/motion/fade-in"
import InViewEffect from "@/components/motion/inview-effect"

const HomePage = () => {
  return (
    <main className="min-h-screen pb-16">
      <Container className="mt-12">
        <FadeIn>
          <Slider image="/banner/banner.png" />
        </FadeIn>

        <Container className="px-14 mt-12 space-y-20">
          <InViewEffect>
            <HighlightSection />
          </InViewEffect>

          <InViewEffect>
            <EventSection />
          </InViewEffect>

          <InViewEffect>
            <InflationSection />
          </InViewEffect>

          <InViewEffect>
            <FinancialLiteracySection />
          </InViewEffect>
        </Container>
      </Container>
    </main>
  )
}

export default HomePage
