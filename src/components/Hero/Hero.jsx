import { useEffect, useState } from "react";
import { heroSlides } from "../../data/projects";
import { ArrowDown, ArrowUpRight } from "../Icons/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.slides} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${
              index === active ? styles.slideActive : ""
            }`}
            style={{ backgroundImage: `url("${slide.src}")` }}
          />
        ))}
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={`eyebrow ${styles.kicker}`}>
          Carolina Cagliuso · Arquitectura &amp; Diseño
        </p>

        <h1 className={styles.title}>
          Diseñamos espacios
          <span className={styles.outline}>que se sienten.</span>
        </h1>

        <p className={styles.lead}>
          Arquitectura, interiores y espacios comerciales donde la estética, la
          función y la sostenibilidad conviven en equilibrio.
        </p>

        <div className={styles.actions}>
          <a href="#proyectos" className="btn btnSolid">
            Ver proyectos
            <ArrowUpRight />
          </a>
          <a href="#estudio" className={`btn btnGhost ${styles.ghostOnDark}`}>
            Conocer el estudio
          </a>
        </div>
      </div>

      <div className={`container ${styles.footer}`}>
        <a href="#estudio" className={styles.scrollCue}>
          <span className={styles.scrollIcon}>
            <ArrowDown size={16} />
          </span>
          <span>Descubrir</span>
        </a>

        <div className={styles.pager} role="group" aria-label="Imágenes de portada">
          <span className={styles.counter} aria-hidden="true">
            {String(active + 1).padStart(2, "0")}
            <span>/ {String(heroSlides.length).padStart(2, "0")}</span>
          </span>
          <div className={styles.dots}>
            {heroSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                className={`${styles.dot} ${
                  index === active ? styles.dotActive : ""
                }`}
                onClick={() => setActive(index)}
                aria-label={`Ver imagen ${index + 1}: ${slide.alt}`}
                aria-pressed={index === active}
              />
            ))}
          </div>
        </div>
      </div>

      <span className={styles.sideLabel} aria-hidden="true">
        Portfolio — Arquitectura &amp; Diseño
      </span>
    </section>
  );
}
