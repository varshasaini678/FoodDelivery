import '../App.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
const Menu = ()=>{
    const [menu,setMenu]=useState([]);
    const params= useParams();


    const fetchMenu = async(resId)=>{
    
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId);
        const resp = await data.json();
        setMenu(resp.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.itemCards||resp.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.categories[0].itemCards)
    }

    useEffect(()=>{
        console.log('====',params)
        fetchMenu(params.resId);
        },[])


    if(!menu.length){
        return <>Loading</>
    }
    return (
        <div className=''>
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                {menu.map((item)=>(
                <li>{item.card.info.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Menu