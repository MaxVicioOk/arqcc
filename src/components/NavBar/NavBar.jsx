import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav className={isScrolled ? styles.navBarShadow : styles.navBar}>
      <button className={styles.togglerButton}>
        <img src="assets/icon-toggler.png" alt="Toggler Button"/>
      </button>
      <ul className={styles.list}>
        <li><Link to={`/`}>Inicio</Link></li>
        <li><a href='#CC'>Nosotros</a></li>
        <li><a href='#EXTERIORES'>Exteriores</a></li>
        <li><a href='#INTERIORES'>Interiores</a></li>
        <li><a href='#OFICINAS'>Oficinas</a></li>
        <li><a href='#redes'>Redes</a></li>
      </ul>
    </nav>
  )
}