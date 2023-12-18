import '../App.css';

const Card = ({item})=>{
    if(!item)
        return null

    return (
        <div className='card'>
            <img width={280}  height={240} src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+item.info.cloudinaryImageId} alt="restaurant image" />
            <h3>{item.info.name}</h3>
            <div>Star Rating : {item.info.avgRatingString}</div>
            <div>{item.info.locality}</div>
            <div>{item.info.costForTwo}</div>
        </div>
    )
}

export default Card