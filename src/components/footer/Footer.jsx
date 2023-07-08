import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>© 2023 AK, Inc.</div>
        <div className={styles.social}>
          <Image src="/1.png" alt="FB" height={15} width={15} className={styles.icon} />
          <Image src="/2.png" alt="TWT" height={15} width={15} className={styles.icon} />
          <Image src="/3.png" alt="YT" height={15} width={15} className={styles.icon} />
          <Image src="/4.png" alt="Art Prompt" height={15} width={15} className={styles.icon} />
        </div>
    </div>
  )
}

export default Footer