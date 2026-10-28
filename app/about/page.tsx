import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = { title: "About us" };
export default function Page() {
  return (
    <main id="main">
      <section className="page-banner">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <span>/</span> ABOUT VIJAY LOGISTICS
          </div>
          <div className="eyebrow">
            <span></span>ABOUT VIJAY LOGISTICS
          </div>
          <h1>A journey built on trust.</h1>
          <p>
            People, experience and a nationwide network, working together to
            simplify logistics.
          </p>
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
          <Link className="button " href="#journey">
            Explore our journey
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
      <section id="journey" className="section process">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span></span>OUR JOURNEY
              </div>
              <h2>One vehicle. A bigger vision.</h2>
            </div>
            <p className="section-intro">
              Milestones in the growth of Vijay Logistics.
            </p>
          </div>
          <div className="timeline">
            <article>
              <strong>2006</strong>
              <h3>The first mile</h3>
              <p>
                Vijay Logistics began with one vehicle in Aurangabad, now
                Chhatrapati Sambhaji Nagar.
              </p>
            </article>
            <article>
              <strong>2007</strong>
              <h3>Growing with industry</h3>
              <p>
                Logistics service partnerships with Bajaj Auto, Endurance
                Technology and Greaves Limited.
              </p>
            </article>
            <article>
              <strong>2010</strong>
              <h3>A trusted automotive partner</h3>
              <p>
                Became an official logistics service provider htmlFor Škoda
                India and Volkswagen India.
              </p>
            </article>
            <article>
              <strong>2013</strong>
              <h3>Deeper supply chain support</h3>
              <p>
                Established 3PL services htmlFor Bajaj Auto’s Shock-Up Division.
              </p>
            </article>
            <article>
              <strong>2023</strong>
              <h3>Raising the standard</h3>
              <p>
                Achieved the highest SOP htmlFor spare parts distribution (FTL)
                htmlFor Škoda Auto Volkswagen India.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span></span>THE WAY WE WORK
            </div>
            <h2>
              More than transport.
              <br />A team you can depend on.
            </h2>
          </div>
          <p className="section-intro">
            We build operations around your delivery requirements, with a focus
            on responsive service, safe movement and clear communication.
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
              <path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z" />
              <path d="m7 12 3 3 7-7" />
            </svg>
            <h3>Accountability</h3>
            <p>
              We take ownership of planning, coordination and delivery
              documentation.
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
            <h3>Connected operations</h3>
            <p>GPS, TMS and WMS support visibility and informed decisions.</p>
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
              <circle cx="12" cy="12" r="9" />
              <path d="M12 6v6l4 2" />
            </svg>
            <h3>Operational consistency</h3>
            <p>
              Dedicated teams and established processes support time-sensitive
              supply chains.
            </p>
          </article>
        </div>
      </section>
      <section id="gallery" className="section process">
        <div className="wrap">
          <div className="eyebrow">
            <span></span>LIFE ON THE ROAD
          </div>
          <h2>Our people. Our operations.</h2>
          <p>A closer look at the team and vehicles behind Vijay Logistics.</p>
          <Gallery />
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
