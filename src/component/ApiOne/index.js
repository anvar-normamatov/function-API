import React,{useState,useEffect} from "react";
import "./index.scss";
import axios from "axios";


const ApiOne = ()=> {

    const [data,setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setData(json)
        }
        fetchData()
    }, [])

    return(
        <div className="shop-box">
            <div className="shop-container">
                {data.length? ( data.slice (0, 9)
                .map(({id,title,price,description,image})=>(
                    <div className="shop-mini-box" key={id}>
                        <h1 className="card-name">{title}</h1>
                        <img className="card-img" src={image} alt="#"/>
                        <h6 className="card-prce">{price}</h6>
                        <p className="card-prce">{description}</p>
                    </div>
                ))):(<div>loading</div>)
                }   
            </div>
        </div>
    )
}

export default ApiOne