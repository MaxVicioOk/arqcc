import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Header() {
  return (
    <header className={styles.container}>
      <NavBar/>
      <div className={styles.logoContainer}>
        <h2 className={styles.cLogo}>C</h2>
        <h3 className={styles.titulo}>ERROR 404: URL NO ENCONTRADA</h3>
        <Link to={"/"} className={styles.btnHome}>Volver a Inicio</Link>
      </div>
    </header>
  )
}