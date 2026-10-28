const paths = {
  truck: (
    <>
      <path d="M3 7h12v11H3zM15 11h4l3 4v3h-7M6 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1M3 11H1" />
    </>
  ),
  box: (
    <>
      <path d="m3 7 9-5 9 5v11l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v11M7 4l10 6" />
    </>
  ),
  warehouse: (
    <>
      <path d="M2 21V9l10-7 10 7v12M6 21V11h12v10M6 15h12M6 19h12" />
    </>
  ),
  route: (
    <>
      <circle cx="5" cy="5" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="M8 5h8a5 5 0 0 1 0 10H8a4 4 0 0 0 0 8M5 8v2M19 14v2" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  phone: (
    <>
      <path d="m5 3 4 4-2 3a15 15 0 0 0 7 7l3-2 4 4-2 3C10 22 2 14 2 5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 5 10 8L22 5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z" />
      <path d="m7 12 3 3 7-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6v6l4 2" />
    </>
  ),
};
export default function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
