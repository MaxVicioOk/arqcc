import React from 'react'
import styles from './FooterSocialLinks.module.css'

export default function FooterSocialLinks({props}) {
  return (
    <div className={styles.container}>
      <a href={props.url} target='_blank'>
        <img src={props.imgSrc} alt={props.name}/>
        <p>{props.name}</p>
      </a>
    </div>
  )
}