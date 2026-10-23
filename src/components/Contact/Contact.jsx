import { site } from "../../data/projects";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "../Icons/Icons";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.ctaWrap}>
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className={styles.title}>
              ¿Tenés una idea?
              <br />
              <span className={styles.titleAccent}>Hagámosla espacio.</span>
            </h2>
            <p className={styles.text}>
              Contanos qué tenés en mente: una vivienda, una reforma, un espacio
              de trabajo o un stand. Te respondemos con una primera mirada sobre
              el proyecto y los próximos pasos.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={`mailto:${site.email}?subject=Consulta%20de%20proyecto`}
              className="btn btnSolid"
            >
              Escribinos
              <Mail size={17} />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${styles.btnDark}`}
            >
              WhatsApp
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
