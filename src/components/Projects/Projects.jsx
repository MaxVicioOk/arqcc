import { useState } from "react";
import { projects } from "../../data/projects";
import { ArrowUpRight } from "../Icons/Icons";
import Reveal from "../Reveal/Reveal";
import Lightbox from "./Lightbox";
import styles from "./Projects.module.css";

const filters = [
  { id: "todos", label: "Todos" },
  ...projects.map((project) => ({ id: project.id, label: project.title })),
];

export default function Projects() {
  const [filter, setFilter] = useState("todos");
  const [lightbox, setLightbox] = useState(null);

  const visibleProjects =
    filter === "todos"
      ? projects
      : projects.filter((project) => project.id === filter);

  const openGallery = (project, index) => setLightbox({ project, index });

  return (
    <section id="proyectos" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <Reveal>
            <p className="eyebrow">Proyectos seleccionados</p>
          </Reveal>

          <div className={styles.headRow}>
            <Reveal>
              <h2 className={styles.title}>
                El espacio como
                <br />
                <span className={styles.titleAccent}>experiencia.</span>
              </h2>
            </Reveal>

            <Reveal delay={100} className={styles.headAside}>
              <p className={styles.lead}>
                Cuatro disciplinas, una misma búsqueda: espacios que combinan
                belleza, función y responsabilidad con el entorno.
              </p>
              <p className={styles.instructions}>
                Seleccioná una imagen para verla en detalle y conocer su
                descripción.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div
              className={styles.filters}
              role="group"
              aria-label="Filtrar proyectos"
            >
              {filters.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.filter} ${
                    filter === item.id ? styles.filterActive : ""
                  }`}
                  onClick={() => setFilter(item.id)}
                  aria-pressed={filter === item.id}
                >
                  {item.label}
                  <span className={styles.filterCount}>
                    {item.id === "todos"
                      ? projects.length
                      : projects.find((project) => project.id === item.id)
                          .images.length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div key={filter} className={styles.list}>
          {visibleProjects.map((project) => {
            const [cover, ...thumbs] = project.images;

            return (
              <article
                key={project.id}
                id={project.id}
                className={styles.project}
              >
                <div className={styles.projectHead}>
                  <Reveal className={styles.projectTitleWrap}>
                    <span className={styles.projectIndex}>{project.index}</span>
                    <p className={styles.kicker}>{project.kicker}</p>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </Reveal>

                  <Reveal delay={80} className={styles.projectBody}>
                    <p className={styles.projectLead}>{project.lead}</p>
                    <div className={styles.projectDescription}>
                      {project.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className={styles.projectMeta}>
                      <span>{project.images.length} imágenes</span>
                      <button
                        type="button"
                        className={styles.openLink}
                        onClick={() => openGallery(project, 0)}
                      >
                        Abrir galería
                        <ArrowUpRight />
                      </button>
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={40}>
                  <button
                    type="button"
                    className={styles.cover}
                    onClick={() => openGallery(project, 0)}
                    aria-label={`Abrir galería de ${project.title}: ${cover.title}`}
                  >
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={styles.coverOverlay}>
                      <span className={styles.coverTitle}>{cover.title}</span>
                      <span className={styles.coverCta}>
                        Ver galería
                        <ArrowUpRight size={14} />
                      </span>
                    </span>
                  </button>
                </Reveal>

                <div className={styles.thumbs}>
                  {thumbs.map((image, index) => (
                    <Reveal
                      key={image.src}
                      delay={Math.min(index, 5) * 60}
                      className={styles.thumbReveal}
                    >
                      <button
                        type="button"
                        className={styles.thumb}
                        onClick={() => openGallery(project, index + 1)}
                        aria-label={`Ver ${image.title} — ${project.title}`}
                      >
                        <span className={styles.thumbMedia}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                          />
                          <span className={styles.thumbOverlay}>
                            <ArrowUpRight size={15} />
                          </span>
                        </span>
                        <span className={styles.thumbCaption}>
                          {image.title}
                        </span>
                      </button>
                    </Reveal>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          key={`${lightbox.project.id}-${lightbox.index}`}
          project={lightbox.project}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
