import Slider from "@/components/home/slider"
import FadeIn from "@/components/motion/fade-in"
import EventSection from "@/components/home/event-section"
import HighlightSection from "@/components/home/highlight-section"
import InflationSection from "@/components/home/inflation-section"
import FinancialLiteracySection from "@/components/home/financial-literacy-section"

const HomePage = () => {
  return (
    <main className="min-h-screen mb-40 lg:mb-0 lg:pb-0 pb-16">
      <FadeIn>
        <Slider image="/banner/banner.png" />
        <div className="space-y-6 mt-16 h-full">
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
