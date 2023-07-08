import React from 'react'
import styles from './page.module.css'

const PromptLayout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Public Feed</h1>
      {children}
    </div>
  )
}

export default PromptLayout