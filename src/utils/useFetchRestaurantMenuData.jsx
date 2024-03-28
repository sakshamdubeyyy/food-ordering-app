import React from 'react'
import { useEffect, useState } from 'react';

export default function useFetchRestaurantMenuData(resId) {
    const [menuItems, setMenuItems] = useState([]);

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
        console.log('json', json)      
        setMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }
    console.log(menuItems);

    return menuItems;
}
