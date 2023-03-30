import React from 'react';
import styles from '../../styles/Loading.module.css'

function ProductLoading() {
  return (
    <div>
        <div className={styles.skeleton_blog}>
            <main className={styles.skeleton_image}>
            </main>
        </div>
    </div>
  )
}

export default ProductLoading