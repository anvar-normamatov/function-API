import React,{useState, useEffect} from "react";
import "./styles.scss";


const Apitwo =()=> {
    const [data,setData] =useState([]);

    useEffect(() => {
        async function fetchdata(){
            const res = await fetch("https://jsonplaceholder.typicode.com/comments");
            const json =await res.json();
            setData(json);
        }
        fetchdata()
    },[])
 
    return(
        <div className="book-container">
            {data.length?(  data.slice(0,9).map(({id, email,body,name})=>(
                    <div className="book-mini-box" key={id}>
                        <div className="book-name">
                            {name}
                        </div>
                        <h1>{email}</h1>
                        <h1>{body}</h1>
                    </div>
                ))):(<div>Loading</div>)

            }
        </div>
    )
}

export default  Apitwo