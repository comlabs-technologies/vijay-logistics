import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">
              V<span>↗</span>
            </span>
            <span className="brand-type">
              VIJAY <b>LOGISTICS</b>
              <small>Logistics Made Simple</small>
            </span>
          </Link>
          <p>
            Reliable movement. Connected businesses.
            <br />
            Logistics made simple, across India.
          </p>
          <a className="text-link light" href="tel:+919096080671">
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
            </svg>{" "}
            +91 90960 80671
          </a>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About Vijay</Link>
          <Link href="/network">Our network</Link>
          <Link href="/about#gallery">Our operations</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h4>Our services</h4>
          <Link href="/services#service-1">Surface transportation</Link>
          <Link href="/services#service-2">Warehousing & distribution</Link>
          <Link href="/services#service-3">Automotive logistics</Link>
          <Link href="/services#service-4">Hub & spoke logistics</Link>
        </div>
        <div>
          <h4>Get in touch</h4>
          <p>
            E-28, MIDC, Waluj,
            <br />
            Chhatrapati Sambhaji Nagar,
            <br />
            Maharashtra – 431136
          </p>
          <a href="mailto:admin@vijaylogisticsmail.com">
            admin@vijaylogisticsmail.com
          </a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © <span id="year">2026</span> Vijay Logistics. All rights reserved.
        </span>
        <span>Logistics Made Simple.</span>
        <Link href="#top" aria-label="Back to top">
          ↑
        </Link>
      </div>
    </footer>
  );
}
