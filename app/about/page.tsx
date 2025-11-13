export const metadata = { title: "About | Pat’s Power Washing" };

export default function AboutPage() {
  return (
    <div className="section py-12">
      <h1 className="text-3xl font-bold text-brand-dark">About Pat</h1>
      <p className="mt-4 text-slate-700">
        I’m Pat Dugan, a 20-year-old owner focused on quality, reliability, and respect for your home.
        I share real job videos so you know exactly what to expect.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-brand-dark">Our Mission</h2>
      <p className="mt-2 text-slate-700">
        Deliver professional, high-quality exterior cleaning with honest pricing and excellent service.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-brand-dark">Our Values</h2>
      <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
        <li>Professionalism</li>
        <li>Quality</li>
        <li>Trust</li>
        <li>Community</li>
      </ul>
    </div>
  );
}
