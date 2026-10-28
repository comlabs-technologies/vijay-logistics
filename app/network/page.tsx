import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Our network" };
export default function Page() {
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> OUR NETWORK
          </div>
          <div className="eyebrow">
            <span></span>OUR NETWORK
          </div>
          <h1>Connected across India.</h1>
          <p>
            An extensive road network, strategic hubs and regional expertise
            that bring your business closer to its markets.
          </p>
        </div>
      </section>
      <section className="section network-section">
        <div className="wrap network-grid">
          <div>
            <div className="eyebrow">
              <span></span>OUR REACH
            </div>
            <h2>
              Local understanding.
              <br />
              Nationwide movement.
            </h2>
            <p>
              From industrial centres to dealer networks, our transport and
              warehousing operations connect businesses across India.
            </p>
            <div className="network-numbers">
              <div>
                <strong>8,000+</strong>
                <span>Pincodes</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Strategic hubs</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Branch offices</span>
              </div>
            </div>
            <Link className="button " href="/network">
              Explore our network
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="map-panel">
            <img
              src="/assets/network.webp"
              alt="Vijay Logistics transport network across India"
              loading="lazy"
            />
            <span className="map-label">CONNECTED ACROSS INDIA</span>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span></span>NETWORK AT A GLANCE
            </div>
            <h2>
              The infrastructure
              <br />
              behind every promise.
            </h2>
          </div>
          <p className="section-intro">
            A combination of fleet strength, warehousing and cross-docking
            supports flexible operations across key markets.
          </p>
        </div>
        <div className="value-grid">
          <article>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 7h12v11H3zM15 11h4l3 4v3h-7M6 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1M3 11H1" />
            </svg>
            <strong>180+</strong>
            <h3>Owned vehicles</h3>
            <p>Supported by 600+ vendor vehicles across the fleet network.</p>
          </article>
          <article>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 21V9l10-7 10 7v12M6 21V11h12v10M6 15h12M6 19h12" />
            </svg>
            <strong>100,000+</strong>
            <h3>Sq. ft. warehousing</h3>
            <p>
              Storage capacity supported by 10+ cross docks and 4 strategic
              hubs.
            </p>
          </article>
          <article>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="5" cy="5" r="3" />
              <circle cx="19" cy="19" r="3" />
              <path d="M8 5h8a5 5 0 0 1 0 10H8a4 4 0 0 0 0 8M5 8v2M19 14v2" />
            </svg>
            <strong>250+</strong>
            <h3>Dealer distribution</h3>
            <p>
              Automotive parts distribution through regional warehouse
              operations.
            </p>
          </article>
        </div>
      </section>
      <section className="section process">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span></span>KEY OPERATING LOCATIONS
              </div>
              <h2>Closer to your business.</h2>
            </div>
            <p className="section-intro">
              For specific lane availability and delivery schedules, speak with
              our operations team.
            </p>
          </div>
          <div className="locations">
            <div>
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
              <h3>Chhatrapati Sambhaji Nagar</h3>
              <span>Head office · Maharashtra</span>
            </div>
            <div>
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
              <h3>Pune</h3>
              <span>Regional operations</span>
            </div>
            <div>
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
              <h3>NCR / Gurugram</h3>
              <span>Regional operations</span>
            </div>
            <div>
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
              <h3>Bengaluru</h3>
              <span>Regional operations</span>
            </div>
            <div>
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
              <h3>Hyderabad</h3>
              <span>Distribution network</span>
            </div>
            <div>
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
              <h3>Coimbatore</h3>
              <span>Distribution network</span>
            </div>
          </div>
          <Link className="button " href="/contact">
            Check your route
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12h16m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <div>
            <div className="eyebrow">
              <span></span>LET’S MOVE FORWARD
            </div>
            <h2>
              Your next delivery starts
              <br />
              with a conversation.
            </h2>
          </div>
          <Link className="button " href="/contact">
            Get a custom quote
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 12h16m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
