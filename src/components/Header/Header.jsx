import React from 'react'
import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'

export default function Header() {
  return (
    <header className={styles.container}>
      <NavBar/>
      <div className={styles.logoContainer}>
        <h2 className={styles.cLogo}>C</h2>
        <h3 className={styles.titulo}>ARQUITECTURA | DISEÑO</h3>
      </div>
    </header>
  )
}