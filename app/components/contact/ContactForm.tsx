"use client";

import { useState } from "react";

export default function ContactForm() {
  const inputCls =
    "w-full rounded-2xl border border-slate-200 px-4 py-3 bg-white text-slate-800 shadow";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    preferred: "",   // stays a string
    referral: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.error || "Something went wrong. Please try again.");
      } else {
        setStatus("Thanks! Pat will reach out to you shortly.");
        setForm({
          name: "",
          phone: "",
          email: "",
          address: "",
          service: "",
          preferred: "",
          referral: "",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="mt-6 grid gap-4 max-w-2xl"
      onSubmit={handleSubmit}
    >
      <input
        className={inputCls}
        name="name"
        placeholder="Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className={inputCls}
        name="phone"
        placeholder="Phone"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        className={inputCls}
        name="email"
        placeholder="Email"
        type="email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className={inputCls}
        name="address"
        placeholder="Address / City"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <select
        className={inputCls}
        name="service"
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
      >
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

      {/* Changed this field */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-slate-700" htmlFor="preferred">
          Preferred date &amp; time
        </label>
        <input
          id="preferred"
          className={inputCls}
          name="preferred"
          type="datetime-local"
          value={form.preferred}
          onChange={(e) => setForm({ ...form, preferred: e.target.value })}
        />
      </div>

      <input
        className={inputCls}
        name="referral"
        placeholder="How did you hear about us?"
        value={form.referral}
        onChange={(e) => setForm({ ...form, referral: e.target.value })}
      />

      <button
        type="submit"
        className="rounded-2xl px-5 py-3 bg-brand-primary text-white font-semibold shadow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
        disabled={loading}
      >
        {loading ? "Sending..." : "Request Quote"}
      </button>

      {status && (
        <p className="text-sm text-slate-700 mt-1">
          {status}
        </p>
      )}
    </form>
  );
}
