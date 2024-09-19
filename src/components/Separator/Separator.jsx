import React from 'react'
import styles from './Separator.module.css'

export default function Separator() {
  const profPic = "/src/assets/caroPerfil.png"
  return (
    <div id="CC" className={styles.container}>
      <img src={profPic} alt="foto degradé b&n" />
      <div>
        <h2 >Carolina Cagliuso</h2>
        <p>Arquitecta con una sólida trayectoria en el desarrollo de proyectos y diseño arquitectónico, destacándose por su enfoque innovador y su compromiso con la sostenibilidad. Con una formación académica de excelencia y una vasta experiencia en el sector. Manteniendo una visión clara hacia el futuro, continúa innovando y explorando nuevas formas de hacer de la arquitectura una disciplina más sostenible y responsable.</p>
      </div>
    </div>
  )
}
