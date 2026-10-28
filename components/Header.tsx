"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const links = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Services", "/services"],
  ["Our network", "/network"],
  ["Contact", "/contact"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menu.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 850) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <div className="wrap">
          <div>
            <a href="tel:+919096080671">
              <Icon name="phone" />
              <span>+91 90960 80671 / 72</span>
            </a>
            <a href="mailto:admin@vijaylogisticsmail.com">
              <Icon name="mail" />
              <span>admin@vijaylogisticsmail.com</span>
            </a>
          </div>
          <span className="top-location">
            <Icon name="pin" />
            Chhatrapati Sambhaji Nagar, India
          </span>
        </div>
      </div>
      <header id="top">
        <div className="wrap nav-wrap">
          <Link
            className="brand"
            href="/"
            aria-label="Vijay Logistics home"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark">
              V<span>↗</span>
            </span>
            <span className="brand-type">
              VIJAY <b>LOGISTICS</b>
              <small>Logistics Made Simple</small>
            </span>
          </Link>
          <nav
            id="navigation"
            className={open ? "open" : ""}
            aria-label="Main navigation"
          >
            {links.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </nav>
          <Link
            className="button nav-quote"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Get a quote
            <Icon name="arrow" />
          </Link>
          <button
            className="menu"
            ref={menu}
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
