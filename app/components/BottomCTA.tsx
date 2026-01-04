// app/components/BottomCTA.tsx
import CTAButtons from "./ctaButtons";

export default function BottomCTA() {
  return (
    <section className="bg-brand-primary-dark text-white">
      <div className="section py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Bring Back the Shine?</h2>
        <p className="mt-2 opacity-90">
          Fast quotes. Real results. Reliable service across Maryland, DC, and Virginia.
        </p>
        <div className="mt-6">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}