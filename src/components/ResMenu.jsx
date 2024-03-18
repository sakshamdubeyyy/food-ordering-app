import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import styles from "./ResMenu.module.css"
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';

export default function ResMenu() {
    const [menuData, setMenuData] = useState([]);
    const [menuItems, setMenuItems] = useState([]); 
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        let data = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`, {
            headers: {
            'x-cors-api-key': 'temp_8b3f5112892219c4a0e5f81e204587f4'
            }
          });
        let json = await data.json();        
        setMenuData(json?.data?.cards[0]?.card?.card?.info);
        setMenuItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards)
    }
    console.log(menuItems)


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
