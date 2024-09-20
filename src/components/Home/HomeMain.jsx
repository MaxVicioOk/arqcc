import React from 'react'
import styles from './HomeMain.module.css'
import Separator from '../Separator/Separator'
import ArticleHome from './ArticleHome'

export default function HomeMain() {
  const imgInt = "/assets/interiores/inte.png"
  const stand = "/assets/stands expo/IMAGEN1.png"
  const imgExt = "/assets/viviendas/renders realista..4 con marca de agua.png"
  const imgOffice = "/assets/oficinas/ofi interior 2mas1.png"
  const titleExt = "EXTERIORES"
  const textExt = "Creamos exteriores impresionantes que armonizan con el entorno natural. Desde jardines modernos hasta fachadas innovadoras, nuestros diseños exteriores son el perfecto equilibrio entre estética y funcionalidad."
  const titleInt = "INTERIORES"
  const textInt = "Nuestros diseños de interiores transforman espacios en lugares de vida y trabajo inspiradores. Combinamos creatividad y funcionalidad para crear ambientes únicos que reflejan la personalidad y necesidades de nuestros clientes."
  const titleOffice = "OFICINAS"
  const textOffice = "texto de descripción de oficinas"
  const titleStand = "ESTANDS DE EXPOSICIÓN"
  const textStand = "texto de descripción de stands de exposición"
  return (
    <main className={styles.contMain}>
      <Separator/>
      <section className={styles.contSection}>
        <ArticleHome img={imgExt} textRight={false} myTitle={titleExt} myText={textExt}/>
        <ArticleHome img={imgInt} textRight={true} myTitle={titleInt} myText={textInt}/>
        <ArticleHome img={imgOffice} textRight={false} myTitle={titleOffice} myText={textOffice}/>
        <ArticleHome img={stand} textRight={true} myTitle={titleStand} myText={textStand}/>
      </section>
    </main>
  )
}