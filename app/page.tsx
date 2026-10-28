import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Logistics Made Simple" };
export default function Page() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-shade"></div>
        <div className="hero-content wrap">
          <div className="eyebrow">
            <span></span>LOGISTICS & TRANSPORTATION
          </div>
          <h1>
            Moving your business.
            <br />
            Delivering your <span>trust.</span>
          </h1>
          <p>
            Dependable transport. Connected warehouses. Nationwide reach.
            <br /> With Vijay Logistics, your business is always moving forward.
          </p>
          <div className="hero-actions">
            <Link className="button " href="/services">
              Explore our services
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
            <Link className="how-link" href="#process">
              <span className="play">▶</span>How we work
            </Link>
          </div>
          <div className="hero-bottom">
            <span>
              <i></i> YOUR PARTNER ON EVERY MILE
            </span>
            <div className="hero-pages">
              <span className="active">01</span>
              <span className="line"></span>
              <span>ROAD · WAREHOUSE · DISTRIBUTION</span>
            </div>
          </div>
        </div>
        <span className="hero-side">LOGISTICS MADE SIMPLE</span>
      </section>
      <div className="stats wrap">
        <div>
          <strong>
            800<em>+</em>
          </strong>
          <span>Fleet network</span>
        </div>
        <div>
          <strong>
            8,000<em>+</em>
          </strong>
          <span>Pincodes covered</span>
        </div>
        <div>
          <strong>
            100,000<em>+</em>
          </strong>
          <span>Sq. ft. warehousing</span>
        </div>
        <div>
          <strong>
            10<em>+</em>
          </strong>
          <span>Cross docks</span>
        </div>
      </div>
      <section className="clients wrap">
        <p>LONG-STANDING RELATIONSHIPS. SHARED PROGRESS.</p>
        <div>
          <span className="vw">Volkswagen</span>
          <span>ŠKODA</span>
          <span className="bajaj">BAJAJ AUTO</span>
          <span>ENDURANCE</span>
          <span className="greaves">GREAVES</span>
        </div>
      </section>
      <section className="section wrap about-grid">
        <div className="about-image">
          <img
            src="/assets/trucks.webp"
            alt="Vijay Logistics vehicles ready htmlFor dispatch"
            loading="lazy"
          />
          <div className="experience">
            <strong>2006</strong>
            <span>
              Our journey began.
              <br />
              Our commitment continues.
            </span>
          </div>
          <div className="image-caption">
            OUR FLEET. YOUR BUSINESS IN MOTION.
          </div>
        </div>
        <div>
          <div className="eyebrow">
            <span></span>WELCOME TO VIJAY LOGISTICS
          </div>
          <h2>
            Big enough to deliver.
            <br />
            Close enough to care.
          </h2>
          <p>
            From our first vehicle in Chhatrapati Sambhaji Nagar to a nationwide
            logistics network, we have grown with one clear purpose: to make
            logistics simple htmlFor your business.
          </p>
          <p>
            We connect manufacturers, warehouses and markets with dependable
            road transportation, responsive teams and technology that keeps you
            informed.
          </p>
          <div className="mini-features">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z" />
                <path d="m7 12 3 3 7-7" />
              </svg>
              Trusted OEM partnerships
            </span>
            <span>
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
              Pan-India connectivity
            </span>
          </div>
          <Link className="button " href="/about">
            More about Vijay
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
      <section className="section services-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span></span>WHAT WE DO
              </div>
              <h2>
                Every link in your supply chain.
                <br />
                One dependable partner.
              </h2>
            </div>
            <Link className="button outline" href="/services">
              All our services
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
          <div className="service-grid">
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
              <Link className="text-link" href="/services#service-1">
                Explore service{" "}
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
              <Link className="text-link" href="/services#service-2">
                Explore service{" "}
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
              <Link className="text-link" href="/services#service-3">
                Explore service{" "}
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
              <Link className="text-link" href="/services#service-4">
                Explore service{" "}
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
      <section className="section wrap proof">
        <div>
          <div className="eyebrow">
            <span></span>BUILT AROUND YOUR BUSINESS
          </div>
          <h2>
            Confidence at every
            <br />
            stage of the journey.
          </h2>
          <p>
            Experienced people and connected systems bring control to complex
            logistics.
          </p>
          <Link className="text-link" href="/about">
            Discover the Vijay advantage{" "}
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
        <div className="proof-items">
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
            <div>
              <h3>Visibility that works htmlFor you</h3>
              <p>
                GPS-enabled fleets, transport and warehouse management systems,
                and electronic proof of delivery.
              </p>
            </div>
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
              <path d="M3 7h12v11H3zM15 11h4l3 4v3h-7M6 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1M3 11H1" />
            </svg>
            <div>
              <h3>The capacity to keep you moving</h3>
              <p>
                An extensive fleet network, supported by owned vehicles and
                established transport partners.
              </p>
            </div>
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
              <path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z" />
              <path d="m7 12 3 3 7-7" />
            </svg>
            <div>
              <h3>Partnership built on consistency</h3>
              <p>
                Long-standing relationships with leading automotive
                manufacturers and industrial businesses.
              </p>
            </div>
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
      <section className="testimonial">
        <div className="wrap">
          <span className="quote-mark">“</span>
          <div>
            <div className="eyebrow">
              <span></span>TRUSTED ON THE ROAD
            </div>
            <blockquote>
              Vijay Logistics has been providing excellent transportation
              services and have been delivering service level about 98% which is
              outstanding.
            </blockquote>
            <p>
              <strong>Volkswagen Group Parts Logistics</strong>
              <span>Automotive logistics partner</span>
            </p>
          </div>
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
