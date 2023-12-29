import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <button className={styles.togglerButton}>
        <img src="src/assets/icon-toggler.png" alt="Toggler Button"/>
      </button>
      <ul className={styles.list}>
        <li><Link to=''>Inicio</Link></li>
        <li><Link to=''>Viviendas</Link></li>
        <li><Link to=''>Oficinas</Link></li>
      </ul>
    </nav>
  )
}