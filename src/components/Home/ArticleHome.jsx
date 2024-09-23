import React from 'react'
import styles from './ArticleHome.module.css'

export default function ArticleHome({img, textRight, myTitle, myText}) {
  return (
    <>{ textRight ? 
      <article id={myTitle} className={styles.contArticleR}>
        <div className={styles.imgDiv}>
          <img src={img} alt="" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>
            {myTitle}
          </h2>
          <p>
            {myText}
          </p>
        </div>
      </article> :
      <article id={myTitle} className={styles.contArticleL}>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>
            {myTitle}
          </h2>
          <p>
            {myText}
          </p>
        </div>
        <div className={styles.imgDiv}>
          <img src={img} alt="" />
        </div>
      </article>
      }
    </>
  )
}