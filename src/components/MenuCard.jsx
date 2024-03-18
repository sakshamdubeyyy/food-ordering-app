import React from 'react'
import styles from "./MenuCard.module.css"

export default function MenuCard({item}) {
    let info = item.card.info;
    console.log(info.ratings.aggregatedRating.rating);

  return (
    <div className={styles.cotainer}>
        <div className={styles.info}>
            <h3>{info.name}</h3>
            <h5>{info.description}</h5>
            <h5>Rs. {Math.floor(info.price/100) || info.defaultPrice/100}</h5>
            {info.ratings.aggregatedRating.rating !== undefined ? <h5>⭐ {info.ratings.aggregatedRating.rating}</h5> : null}
        </div>
        <div className={styles.image}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.imageId}`}/>
        </div>
    </div>
  )
}
