import { pillars } from "../../data/projects";
import { ArrowUpRight } from "../Icons/Icons";
import Reveal from "../Reveal/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="estudio" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.mediaWrap}>
            <div className={styles.media}>
              <div className={styles.frame}>
                <img
                  src={encodeURI("/assets/caroPerfil.png")}
                  alt="Retrato en blanco y negro de Carolina Cagliuso, arquitecta y fundadora del estudio"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.badge} aria-hidden="true">
                <span className={styles.badgeMark}>CC</span>
                <span className={styles.badgeText}>
                  Estudio de
                  <br />
                  arquitectura
                </span>
              </div>
              <div className={styles.mediaCaption}>
                <span>Carolina Cagliuso</span>
                <span>Arquitecta</span>
              </div>
            </div>
          </Reveal>

          <div className={styles.body}>
            <Reveal>
              <p className="eyebrow">La arquitecta</p>
              <h2 className={styles.title}>
                Carolina
                <br />
                Cagliuso
              </h2>
              <p className={styles.role}>
                Fundadora · Proyecto, dirección y diseño
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className={styles.bio}>
                <p>
                  Arquitecta con una sólida trayectoria en el desarrollo de
                  proyectos y diseño arquitectónico, se destaca por su enfoque
                  innovador y su compromiso con la sostenibilidad. Su formación
                  académica de excelencia y su experiencia en el sector le
                  permiten abordar cada proyecto con una mirada integral, atenta
                  tanto al detalle como al contexto.
                </p>
                <p>
                  Con una visión clara hacia el futuro, continúa explorando
                  nuevas formas de hacer de la arquitectura una disciplina más
                  sostenible, humana y responsable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <blockquote className={styles.quote}>
                “Cada espacio tiene una historia que merece ser contada a través
                de la luz, los materiales y la forma de habitarlo.”
              </blockquote>
            </Reveal>

            <Reveal delay={180}>
              <a href="#proyectos" className={styles.link}>
                Ver proyectos seleccionados
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </div>

        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.index}
              delay={index * 90}
              className={styles.pillar}
            >
              <span className={styles.pillarIndex}>{pillar.index}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
