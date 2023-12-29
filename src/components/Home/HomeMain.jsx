import React from 'react'
import styles from './HomeMain.module.css'

export default function HomeMain() {
  return (
    <main className={styles.contMain}>
      <section className={styles.contSection}>
        <article className={styles.contArticle}>
          <div className={styles.imgDivContainer}>
            <div className={styles.imgDiv}>
              <img src="" alt="" />
            </div>
          </div>
          <div className={styles.textContainer}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet eos nisi corporis accusamus ratione nulla fugiat vitae laborum iusto commodi inventore deleniti placeat officiis, ipsam mollitia nam! Beatae, delectus!
            </p>
          </div>
        </article>
        <article className={styles.contArticle}>
          <div className={styles.textContainer}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet eos nisi corporis accusamus ratione nulla fugiat vitae laborum iusto commodi inventore deleniti placeat officiis, ipsam mollitia nam! Beatae, delectus!
            </p>
          </div>
          <div className={styles.imgDivContainer}>
            <div className={styles.imgDiv}>
              <img src="" alt="" />
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}