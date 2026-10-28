import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
export const metadata: Metadata = { title: "Contact & request a quote" };
export default function Page() {
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> CONTACT US
          </div>
          <div className="eyebrow">
            <span></span>CONTACT US
          </div>
          <h1>Let’s get your business moving.</h1>
          <p>
            Tell us what you need to move. We’ll help you plan the next step.
          </p>
        </div>
      </section>
      <section className="section wrap contact-grid">
        <aside>
          <div className="eyebrow">
            <span></span>TALK TO OUR TEAM
          </div>
          <h2>
            Good logistics starts
            <br />
            with a conversation.
          </h2>
          <p>
            For transport, warehousing or a tailored distribution plan, connect
            with the Vijay Logistics team.
          </p>
          <div className="contact-detail">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m5 3 4 4-2 3a15 15 0 0 0 7 7l3-2 4 4-2 3C10 22 2 14 2 5Z" />
            </svg>
            <div>
              <h3>Call us</h3>
              <a href="tel:+919096080671">+91 90960 80671</a>
              <a href="tel:+919096080672">+91 90960 80672</a>
            </div>
          </div>
          <div className="contact-detail">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 5 10 8L22 5" />
            </svg>
            <div>
              <h3>Email us</h3>
              <a href="mailto:admin@vijaylogisticsmail.com">
                admin@vijaylogisticsmail.com
              </a>
            </div>
          </div>
          <div className="contact-detail">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div>
              <h3>Visit our head office</h3>
              <p>
                E-28, MIDC, Waluj,
                <br />
                Chhatrapati Sambhaji Nagar,
                <br />
                Maharashtra – 431136
              </p>
              <a
                className="text-link"
                href="https://www.google.com/maps/search/?api=1&query=E-28+MIDC+Waluj+Chhatrapati+Sambhaji+Nagar+431136"
                target="_blank"
                rel="noopener"
              >
                Get directions ↗
              </a>
            </div>
          </div>
        </aside>
        <QuoteForm />
      </section>
    </main>
  );
}
