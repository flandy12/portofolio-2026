import { useEffect, useState } from "react";

const navItems = [["Tentang", "#tentang"], ["Pengalaman", "#pengalaman"], ["Proyek", "#proyek"], ["Kontak", "#kontak"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#beranda" aria-label="Kembali ke beranda">FR<span>.</span></a>
      <button className="menu-button" type="button" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((value) => !value)}>
        <span /><span />
      </button>
      <nav id="main-navigation" className={open ? "nav-open" : ""} aria-label="Navigasi utama">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#kontak" onClick={() => setOpen(false)}>Mari bicara <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
