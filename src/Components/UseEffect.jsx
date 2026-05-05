import React from 'react'
import{useState , useEffect} from 'react'

const UseEffect = () => {
    const [data , setData] = useState([]);

    const getData = async()=>{
        try{
            const a = await fetch("https://dummyjson.com/products");
            const b = await a.json();
            console.log(b.products);
            setData(b.products);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
     <div>
    {data.map((each) => (
      <div key={each.id}>
        <h1>{each.title}</h1>
        <h2>{each.id}</h2>
        <h3>{each.tags.map((item)=>
            <h5>{item}</h5>
            )}</h3>
        <p>{each.body}</p>
        <p>{each.description}</p>
      </div>
    ))}
  </div>
  )
}

export default UseEffect