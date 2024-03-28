import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import styles from "./ResMenu.module.css"
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import useFetchRestaurantMenu from '../utils/useFetchRestaurantMenu';
import useFetchRestaurantMenuData from '../utils/useFetchRestaurantMenuData';

export default function ResMenu() { 
    const {resId} = useParams();

    const menuData = useFetchRestaurantMenu(resId);
    const menuItems = useFetchRestaurantMenuData(resId);

    return menuData.length === 0 ? <Shimmer/> : (
        <div className={styles.container}>
            <div className={styles.resInfo}>
                <div className={styles.basicInfo}>
                    <h1 className={styles.resName}>{menuData.name}</h1>
                    <h5 className={styles.resBasic}>{menuData.cuisines.join(", ")}</h5>
                    <h5 className={styles.resBasic}>{menuData.areaName}, {menuData.city}</h5>
                    <h5 className={styles.resBasic}>{menuData.costForTwoMessage}</h5>
                    <h5 className={styles.resBasic}>{menuData.sla.slaString} Away</h5>
                </div>
                <div className={styles.rating}>
                    <div className={styles.avgRating}>
                        <h5>⭐{menuData.avgRatingString}</h5>
                    </div>
                    <h5 className={styles.totalRatings}>{menuData.totalRatingsString}</h5>
                </div>
            </div>
            <h3>Recommended Items</h3>
            <div className={styles.menuItems}>
                {menuItems.map((item) => (
                    <MenuCard key={item.card.info.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
