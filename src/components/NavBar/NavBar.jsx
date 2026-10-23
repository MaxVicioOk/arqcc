import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, site } from "../../data/projects";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "../Icons/Icons";
import styles from "./NavBar.module.css";

const SECTION_IDS = ["inicio", "estudio", "proyectos", "contacto"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      const offset = 140;
      let current = SECTION_IDS[0];
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 84;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
      setActive(id);
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          to="/"
          className={styles.brand}
          onClick={(e) => {
            closeMenu();
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "/");
              setActive("inicio");
            }
          }}
          aria-label="CC Arquitectura y Diseño — Ir al inicio"
        >
          <span className={styles.brandMark} aria-hidden="true">
            C
          </span>
          <span className={styles.brandText}>
            <strong>Carolina Cagliuso</strong>
            <span>Arquitectura &amp; Diseño</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegación principal">
          <ul>
            {navLinks.map((link) => {
              const hash = link.to.includes("#") ? link.to.substring(link.to.indexOf("#")) : "#inicio";
              const id = hash.replace("#", "");
              return (
                <li key={link.label}>
                  <a
                    href={hash}
                    onClick={(e) => handleNavClick(e, hash)}
                    className={active === id ? styles.active : ""}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contacto"
          onClick={(e) => handleNavClick(e, "#contacto")}
          className={`btn btnSolid ${styles.cta}`}
        >
          Hablemos
          <ArrowUpRight />
        </a>

        <button
          type="button"
          className={`${styles.burger} ${open ? styles.burgerActive : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className={styles.burgerBox} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          <ul>
            {navLinks.map((link, index) => {
              const hash = link.to.includes("#") ? link.to.substring(link.to.indexOf("#")) : "#inicio";
              return (
                <li key={link.label}>
                  <a
                    href={hash}
                    onClick={(e) => handleNavClick(e, hash)}
                    tabIndex={open ? 0 : -1}
                  >
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.mobileFoot}>
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
            {site.email}
          </a>
          <div className={styles.mobileSocials}>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Carolina Cagliuso"
              tabIndex={open ? 0 : -1}
            >
              <Instagram />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Carolina Cagliuso"
              tabIndex={open ? 0 : -1}
            >
              <Linkedin />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Enviar un correo"
              tabIndex={open ? 0 : -1}
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
