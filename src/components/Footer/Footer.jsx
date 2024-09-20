import React from 'react'
import FooterSocialLinks from './FooterSocialLinks'
import styles from './Footer.module.css'

export default function Footer() {
  const socialLiks = [
    {
      id:1,
      name: "Instagram",
      url: "https://www.instagram.com/arq.cagliuso/",
      imgSrc:"/assets/instagramLogo.png",
    },
    {
      id:2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/carolina-yanina-cagliuso/",
      imgSrc:"/assets/linkedinLogo.png"
    },
    {
      id:3,
      name: "E-Mail",
      url: "mailto:arq.carolinacagliuso@outlook.es?subject=Consulta",
      imgSrc:"/assets/mailLogo.png"
    }
  ]
  return (
    <>
      <footer id="redes" className={styles.container}>
        <div className={styles.logoContainer}>
          <h2 className={styles.cLogo}>C</h2>
          <h3 className={styles.titulo}>ARQUITECTURA | DISEÑO</h3>
        </div>
        <div className={styles.linksContainer}>
          {socialLiks.map((red)=>{
            return(
              <FooterSocialLinks key={red.id} props={red}/>
              )
            })}
        </div>
      </footer>
      <div className={styles.btnContainer}>
        <a href="https://wa.me/+5491166749430" target="_blank" >
          <img src="/assets/whatsappLogo.png" alt="button whatsapp" />
        </a>
      </div>
    </>
  )
}
