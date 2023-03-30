import React from 'react';
import styles from '../../styles/Loading.module.css'

function CategoryLoading() {
  return (
    <div>
      <div className={styles.loadingMain} >
          <div className={styles.skeleton_blog2}>
              <main className={styles.skeleton_image2}>
              </main>
          </div>
      </div>
    </div>
  )
}

export default CategoryLoading