import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import styles from "./Body.module.css"
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

export default function Body() {
    const [restaurantData, setRestaurantData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
      getData();
    }, [])

    const getData = async() => {
      const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        headers: {
        'x-cors-api-key': 'temp_8b3f5112892219c4a0e5f81e204587f4'
        }
      });

      const json = await data.json();
      setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   

    const handleRatingFilter = () => {
      setFilteredList(restaurantData.filter((res) => res.info.avgRating > 4));
    }

    const handleNearestFilter = () => {
      setFilteredList(restaurantData.filter((res) => res.info.sla.deliveryTime < 30));
    }

    useEffect(() => {
      let timerId = setTimeout(() => {
        searchText.length !== 0 ? setFilteredList(restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))) : getData();
      }, 100);
      return(() => {
        clearTimeout(timerId);
      })
    }, [searchText])

  return restaurantData.length === 0 ? <Shimmer/> : (
    <div className={styles.container}>
        <div className={styles.searchContainer}>
          <input type='text' className={styles.searchBar} value={searchText} placeholder='Search Restaraunts...' onChange={(e) => setSearchText(e.target.value)}/>
        </div>
        <div className={styles.heading}>
          <h2>Restaraunts Near You</h2>
        </div>
        <div className={styles.filtersAndCards}>
          <div className={styles.filters}>
              <button className={styles.ratingFilterBtn} onClick={handleRatingFilter}>Highest Rated</button>
              <button className={styles.ratingFilterBtn} onClick={handleNearestFilter}>Nearest Restaurants</button>
          </div>
          <div className={styles.resCards}>
              {filteredList.map((restaurant) => (
                <Link key={restaurant.info.id} className={styles.link} to={`/Restaurant/${restaurant.info.id}`}>
                  <ResCard key={restaurant.info.id} resData={restaurant}/>
                </Link>
              ))}
          </div>
        </div>
    </div>  
  )
}
