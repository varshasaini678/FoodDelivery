import '../App.css';
import React, {useState,useEffect,useCallback} from 'react';
function SearchSuggestion() {

  const [suggestions,setSuggestions]=useState([]);
  const [searchStr,setStr]=useState('');
   
  const debounceFunction = (fn,delay)=>{
    let timer;
    return function(...args){
        clearTimeout(timer);
        const context=this;
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
  }
  const fetchSuggestions = (search)=>{
    const resp =  fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.4594965&lng=77.0266383&str='+search);
    resp.then((resp)=>resp.json())
    .then((data)=>{
        console.log("sug",data?.data?.suggestions)
        setSuggestions(data?.data?.suggestions);    
    })
  }

  const betterFunction = useCallback(debounceFunction(fetchSuggestions,1000),[]);

  useEffect(()=>{
    betterFunction(searchStr);
  },[searchStr])


  return (
      <div className='filter-box'>
        <input name='Search' placeholder='Search SUggestions' value={searchStr} onChange={(event)=>setStr(event.target.value )}/>
        {suggestions?.map((item)=>(
            <div key={item.text}>{item.text}</div>
        ))}
      </div>
      
  );
}

export default SearchSuggestion;
