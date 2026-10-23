import { useState } from "react";
import styles from "./Footer.module.css";
import { site } from "../../data/projects";
import { ArrowUpRight, Instagram, Linkedin, Mail } from "../Icons/Icons";

export default function Footer() {
  const [showContacts, setShowContacts] = useState(false);

  const toggleContacts = () => setShowContacts((v) => !v);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <div className={styles.brand}>
              <span className={styles.brandMark} aria-hidden="true">
                C
              </span>
              <div className={styles.brandText}>
                <span className={styles.brandName}>Carolina Cagliuso</span>
                <span className={styles.brandSub}>Arquitectura &amp; Diseño</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Proyecto integral · Interiores · Oficinas · Viviendas · Stands
            </p>
          </div>

          <div className={styles.navBlock}>
            <p className={styles.blockTitle}>Explorar</p>
            <nav>
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#estudio">Estudio</a>
                </li>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className={styles.connectBlock}>
            <p className={styles.blockTitle}>Conectar</p>
            <button
              type="button"
              onClick={toggleContacts}
              className={styles.toggleBtn}
              aria-expanded={showContacts}
            >
              {showContacts ? "Ocultar contacto" : "Mostrar contacto"}
              <ArrowUpRight />
            </button>

            {showContacts && (
              <ul className={styles.socialList}>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Carolina Cagliuso · CC Arquitectura &amp; Diseño</p>
          <a href="#inicio" className={styles.topLink}>
            Volver arriba
            <ArrowUpRight />
          </a>
        </div>
      </div>

      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Contactar por WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.5 12.8l-.2.3-2.8.7.7-2.7-.3-.4A8 8 0 1 1 12 4Zm-2.7 4.7c.1-.3.3-.3.5-.3h.4c.1 0 .2 0 .3.2.1.3.4.9.4 1 0 .1 0 .2-.1.3l-.2.4-.1.2c0 .1 0 .2.1.3.5.8 1.2 1.5 2.1 2 .1.1.2.1.3 0l.5-.5c.1-.1.2-.1.3 0 .4.2.8.4 1.1.6.2.1.2.2.1.3l-.2.5c-.1.2-.3.3-.5.4-.3.1-1.1.1-1.8-.1A7.5 7.5 0 0 1 8.9 10c-.1-.3-.1-.8 0-1.2l.4-.1Z"
          />
        </svg>
      </a>
    </footer>
  );
}
