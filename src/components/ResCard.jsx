import React from 'react'
import styles from "./ResCard.module.css"

export default function ResCard({resData}) {
    const data = resData.info;
  return (
    <div>
      <div className={styles.cardContainer}>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} alt='resimage'/>
        <h4>{data.name}</h4>
        <h6>{data.cuisines.join(", ")}</h6>
        <h6>{data.avgRating} Stars</h6>
        <h6>{data.costForTwo}</h6>
        <h6>{data.sla.slaString} Away</h6>
      </div>
    </div>
  )
}
