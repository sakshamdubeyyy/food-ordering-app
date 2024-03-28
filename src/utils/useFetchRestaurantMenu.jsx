import React from 'react'
import { useEffect, useState } from 'react';

export default function useFetchRestaurantMenu(resId) {
    const [menuData, setMenuData] = useState([]);

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
        // console.log(json)
        setMenuData(json?.data?.cards[2]?.card?.card?.info);
    }
    // console.log(menuData)
    

    return menuData;
}
