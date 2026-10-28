import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Our services" };
export default function Page() {
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> OUR SERVICES
          </div>
          <div className="eyebrow">
            <span></span>OUR SERVICES
          </div>
          <h1>Every movement, thoughtfully managed.</h1>
          <p>
            Transport, storage and distribution solutions shaped around your
            business.
          </p>
        </div>
      </section>
      <section className="section wrap">
        <div className="service-grid full-services">
          <article className="service-card" id="service-1">
            <div className="service-top">
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
              <span>01</span>
            </div>
            <h3>Surface transportation</h3>
            <p>
              Full and part truckload solutions htmlFor inbound, outbound and
              dedicated transport. Built around your load, route and delivery
              requirements.
            </p>
            <ul className="checks">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Full truckload (FTL) & part truckload (PTL)
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Inbound & outbound logistics
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Dedicated fleet operations
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Just-in-time delivery
              </li>
            </ul>
            <Link className="text-link" href="/contact?service=1">
              Discuss your requirements{" "}
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
          </article>
          <article className="service-card" id="service-2">
            <div className="service-top">
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
              <span>02</span>
            </div>
            <h3>Warehousing & distribution</h3>
            <p>
              Storage, inventory control and distribution that connect your
              supply chain from receipt through to dispatch.
            </p>
            <ul className="checks">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Warehousing & storage
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Inventory management
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Order processing & fulfilment
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Returns & reverse logistics
              </li>
            </ul>
            <Link className="text-link" href="/contact?service=2">
              Discuss your requirements{" "}
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
          </article>
          <article className="service-card" id="service-3">
            <div className="service-top">
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
              <span>03</span>
            </div>
            <h3>Automotive & spare parts</h3>
            <p>
              Regional warehouse to dealer distribution htmlFor automotive
              manufacturers, supported by milk runs and planned delivery
              schedules.
            </p>
            <ul className="checks">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Spare parts distribution
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Milk run operations
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                RDC-to-dealer deliveries
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                250+ dealer distribution network
              </li>
            </ul>
            <Link className="text-link" href="/contact?service=3">
              Discuss your requirements{" "}
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
          </article>
          <article className="service-card" id="service-4">
            <div className="service-top">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 7 9-5 9 5v11l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v11M7 4l10 6" />
              </svg>
              <span>04</span>
            </div>
            <h3>Hub & spoke logistics</h3>
            <p>
              Cross-docking and consolidated movement that help goods travel
              efficiently across large geographic areas.
            </p>
            <ul className="checks">
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Cross-dock consolidation
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Hub-to-hub FTL movement
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Sorting & onward dispatch
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Collection & delivery coordination
              </li>
            </ul>
            <Link className="text-link" href="/contact?service=4">
              Discuss your requirements{" "}
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
          </article>
        </div>
      </section>
      <section id="process" className="section process">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">
              <span></span>THE VIJAY WAY
            </div>
            <h2>A clear route from pickup to delivery.</h2>
            <p>
              Thoughtful planning. Coordinated movement. Visibility along the
              way.
            </p>
          </div>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>Tell us what moves</h3>
              <p>
                Share your cargo, route, volumes and delivery needs with our
                team.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>We plan the journey</h3>
              <p>
                We align the fleet, collection schedule and distribution model.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>We keep it moving</h3>
              <p>
                Coordinated dispatch and GPS-enabled visibility support your
                shipment.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Delivered & documented</h3>
              <p>
                Electronic proof of delivery helps close the loop on every
                movement.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section wrap industry">
        <div>
          <div className="eyebrow">
            <span></span>INDUSTRIES WE SERVE
          </div>
          <h2>
            Built htmlFor the demands
            <br />
            of your industry.
          </h2>
        </div>
        <div>
          <article>
            <span>01</span>
            <div>
              <h3>Automotive & OEMs</h3>
              <p>
                Inbound, outbound and spare parts movement across manufacturing
                and dealer networks.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Industrial & manufacturing</h3>
              <p>
                Dedicated transportation and planned movements that support
                production schedules.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Commerce & distribution</h3>
              <p>
                Warehouse-to-market connections, stock transfers and coordinated
                deliveries.
              </p>
            </div>
          </article>
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
