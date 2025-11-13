export const metadata = { title: "Get a Free Quote | Pat’s Power Washing" };

export default function ContactPage() {
  const inputCls =
    "w-full rounded-2xl border border-slate-200 px-4 py-3 bg-white text-slate-800 shadow";

  return (
    <div className="section py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Get a Fast, Free Quote</h1>
      <p className="mt-2 text-slate-700">
        We respond quickly. No obligation, no hidden fees. Prefer to call{" "}
        <a className="underline text-brand-primary" href="tel:12409684892">
          240-968-4892
        </a>
        .
      </p>

      <form className="mt-6 grid gap-4 max-w-2xl">
        <input className={inputCls} name="name" placeholder="Name" required />
        <input className={inputCls} name="phone" placeholder="Phone" required />
        <input
          className={inputCls}
          name="email"
          placeholder="Email"
          type="email"
          required
        />
        <input className={inputCls} name="address" placeholder="Address / City" />
        <select className={inputCls} name="service" defaultValue="">
          <option value="" disabled>
            Services needed
          </option>
          <option>House washing / siding</option>
          <option>Driveway & sidewalk</option>
          <option>Patio / porch / deck</option>
          <option>Fence cleaning</option>
          <option>Roof soft washing</option>
          <option>Storefront / entryway</option>
        </select>
        <input
          className={inputCls}
          name="preferred"
          placeholder="Preferred date/time"
        />
        <input
          className={inputCls}
          name="referral"
          placeholder="How did you hear about us?"
        />
        <button
          type="submit"
          className="rounded-2xl px-5 py-3 bg-brand-primary text-white font-semibold shadow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
        >
          Request Quote
        </button>
      </form>
    </div>
  );
}
