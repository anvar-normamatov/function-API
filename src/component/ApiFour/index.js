import React,{useState, useEffect} from "react";
import "./styles.scss";


const ApiFour = ()=>{
    const [data,setData] =useState([])

    useEffect(()=>{
        async function fetchData(){
            const res =await fetch('https://fakestoreapi.com/products?limit=5');
            const json = await res.json();
            setData(json)
        }
        fetchData()
    },[])
    
    return(
        <div className="apiThee-box">
            {data.length?( data.slice(0,9).map(({ id,title, price, category,image, description,})=>(
                    <div className="apithree-mini-box" key={id}>
                        <h1>{title}</h1>
                        <div>{description}</div>
                        <h1>{category}</h1>
                        <h1>{price}</h1>
                        <img src={image} alt="#"/>
                    </div>
                ))):(<div>Loading</div>)
            }
        </div>
    )
}

export default  ApiFour ;