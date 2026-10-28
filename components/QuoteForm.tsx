"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "./Icon";
const services = [
  "Surface transportation",
  "Warehousing & distribution",
  "Automotive & spare parts",
  "Hub & spoke logistics",
  "Other logistics requirement",
];
const address = "admin@vijaylogisticsmail.com";
export default function QuoteForm() {
  const [service, setService] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [subject, setSubject] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copy enquiry");
  const result = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    const i = Number(
      new URLSearchParams(window.location.search).get("service"),
    );
    if (i >= 1 && i <= 4) setService(services[i - 1]);
  }, []);
  useEffect(() => {
    if (enquiry)
      result.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "nearest",
      });
  }, [enquiry]);
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    setSubject("Logistics enquiry — " + d.get("service"));
    setEnquiry(
      `Hello Vijay Logistics,\n\nI would like to enquire about ${d.get("service")}.\n\nName: ${d.get("name")}\nCompany: ${d.get("company") || "Not specified"}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nPickup: ${d.get("pickup") || "To be discussed"}\nDelivery: ${d.get("delivery") || "To be discussed"}\n\nRequirement:\n${d.get("message")}\n\nPlease contact me to discuss the details.\nThank you.`,
    );
    setCopyLabel("Copy enquiry");
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(enquiry);
      setCopyLabel("Copied");
    } catch {
      preview.current?.focus();
      preview.current?.select();
      setCopyLabel("Select & copy the enquiry below");
    }
  }
  return (
    <div className="form-panel">
      <h2>Request a quote</h2>
      <p>Share a few details to prepare your enquiry.</p>
      <form id="quote-form" onSubmit={prepare}>
        <div className="form-row">
          <label>
            Your name <span>*</span>
            <input
              name="name"
              autoComplete="name"
              placeholder="Full name"
              required
              maxLength={100}
            />
          </label>
          <label>
            Company name
            <input
              name="company"
              autoComplete="organization"
              placeholder="Your company"
              maxLength={150}
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            Email address <span>*</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
              maxLength={150}
            />
          </label>
          <label>
            Phone number <span>*</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="+91"
              required
              pattern="[+0-9 \(\)\-]{7,22}"
              title="Enter a valid phone number (7–22 characters)"
            />
          </label>
        </div>
        <label>
          Service required <span>*</span>
          <select
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <div className="form-row">
          <label>
            Pickup location
            <input name="pickup" placeholder="City / pincode" maxLength={120} />
          </label>
          <label>
            Delivery location
            <input
              name="delivery"
              placeholder="City / pincode"
              maxLength={120}
            />
          </label>
        </div>
        <label>
          Tell us about your requirement <span>*</span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Cargo type, load size, frequency and preferred schedule…"
            maxLength={3000}
          />
        </label>
        <p className="form-note">
          This prepares an email to our team. You can review and send it using
          your email app.
        </p>
        <button className="button" type="submit">
          Prepare enquiry
          <Icon name="arrow" />
        </button>
        {enquiry && (
          <div
            ref={result}
            id="enquiry-result"
            className="enquiry-result"
            role="status"
          >
            <h3>Your enquiry is ready</h3>
            <p>
              Open your email app to review and send, or copy the enquiry and
              email it to {address}.
            </p>
            <a
              className="button"
              href={`mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiry)}`}
            >
              Open email app
              <Icon name="arrow" />
            </a>
            <button type="button" className="copy-button" onClick={copy}>
              {copyLabel}
            </button>
            <textarea
              ref={preview}
              value={enquiry}
              readOnly
              aria-label="Prepared enquiry"
            />
          </div>
        )}
      </form>
    </div>
  );
}
