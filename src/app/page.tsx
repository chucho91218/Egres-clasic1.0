import { HeroSection } from "./components/invitation/hero-section"
import { CountdownSection } from "./components/invitation/countdown-section"
import { LogisticsSection } from "./components/invitation/logistics-section"
import { DressCodeSection } from "./components/invitation/dress-code-section"
import { GallerySection } from "./components/invitation/gallery-section"
import { ContributionSection } from "./components/invitation/contribution-section"
import { InvitationFooter } from "./components/invitation/invitation-footer"
import { MusicIndicator } from "./components/invitation/music-indicator"

export default function Page() {
  return (
    <main className="min-h-svh bg-background">
      <HeroSection />

      {/* Sections on cream background */}
      <div className="bg-background">
        <CountdownSection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        <LogisticsSection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        <DressCodeSection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        <GallerySection />

        <div className="mx-auto h-px w-16 bg-gold/30" />
        <ContributionSection />

        <InvitationFooter />
      </div>

      <MusicIndicator />
    </main>
  )
}