import '../App.css';
import Card  from './card';
import React, {useState,useEffect} from 'react';
import SearchSuggestion from './debounce';
import { Link } from 'react-router-dom';
function Restaurants() {

  const [restaurantList,setList]=useState([]);
  const [searchStr,setStr]=useState('');
   
  useEffect(()=>{
   const resp =  fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

   resp.then((resp)=>resp.json())
   .then((resp)=>{
    console.log(resp.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setList(resp.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
   })
  },[])
  return (
    <>      <div className='filter-box'>
        <SearchSuggestion/>
        <input name='Search' placeholder='Search Restaurants' value={searchStr} onChange={(event)=>setStr(event.target.value )}/>
      </div>
      <div className='card-box'>
      {
        restaurantList.length?(restaurantList.filter((item)=>item?.info.name.toUpperCase().includes(searchStr.toUpperCase())).map((item)=>(
         <Link to={'/restaurant/'+item.info.id}><Card item={item}/></Link> 
        ))):null

    }
    </div>
   
    
    </>
  );
}

export default Restaurants;
