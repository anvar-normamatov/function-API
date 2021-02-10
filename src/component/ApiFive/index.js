import React,{useState,useEffect} from "react";
import "./styles.scss";


 const ApiFive = () => {
    const[data,setData] =useState([]);

    useEffect(()=>{
        async function fetchdata() {
            const res =await fetch('https://jsonplaceholder.typicode.com/photos');
            const json = await res.json();
            setData(json);
        }
        fetchdata()
    })

    return(
        <div className="apiFive-box">
            {data.length?( data.slice(0,10).map(({ id,title, url,thumbnailUrl})=>(
                    <div className="apifive-mini-box" key={id}>
                        <h1>{title}</h1>
                        <img src={url} alt="#"/>
                        <img src={thumbnailUrl} alt="#"/>
                    </div>
                ))):(<div>Loading</div>)

            }
        </div>
    )
}


export default ApiFive;