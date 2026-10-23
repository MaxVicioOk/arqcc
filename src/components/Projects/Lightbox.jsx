import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "../Icons/Icons";
import styles from "./Lightbox.module.css";

export default function Lightbox({ project, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef(null);
  const total = project.images.length;
  const image = project.images[index];

  const goTo = (next) => setIndex((next + total) % total);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % total);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, total]);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${project.title}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <div className={styles.headings}>
            <p className={styles.eyebrow}>
              Proyecto {project.index} — {project.title}
            </p>
            <p className={styles.imageTitle}>{image.title}</p>
          </div>

          <button
            ref={closeRef}
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <Close />
          </button>
        </header>

        <div className={styles.stage}>
          <button
            type="button"
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={() => goTo(index - 1)}
            aria-label="Imagen anterior"
          >
            <ArrowLeft />
          </button>

          <figure className={styles.figure}>
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="eager"
              decoding="async"
            />
          </figure>

          <button
            type="button"
            className={`${styles.nav} ${styles.navNext}`}
            onClick={() => goTo(index + 1)}
            aria-label="Imagen siguiente"
          >
            <ArrowRight />
          </button>
        </div>

        <footer className={styles.footer}>
          <p className={styles.caption} aria-live="polite">
            {image.caption}
          </p>

          <div className={styles.meta}>
            <span className={styles.counter}>
              {String(index + 1).padStart(2, "0")}
              <span> / {String(total).padStart(2, "0")}</span>
            </span>
            <div className={styles.dots} aria-hidden="true">
              {project.images.map((item, dotIndex) => (
                <span
                  key={item.src}
                  className={`${styles.dot} ${
                    dotIndex === index ? styles.dotActive : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
