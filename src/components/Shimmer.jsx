import React from 'react'
import styles from "./Shimmer.module.css"

function Shimmer() {
  return (
    <div className={styles.ShimmerContainer}>
        <div className={styles.buttonsContainer}>
            <button className={styles.button}></button>
            <button className={styles.button}></button>
        </div>
        <div className={styles.boxContainer}>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        <div className={styles.ShimmerCard}></div>
        </div>
    </div>
  )
}

export default Shimmer
