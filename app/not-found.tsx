import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section wrap">
      <h1>Let’s get you back on route.</h1>
      <p>We couldn’t find that page.</p>
      <Link className="button " href="/">
        Back to home
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
    </main>
  );
}
