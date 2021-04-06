import React,{useState,useEffect} from 'react'
import {  useParams } from "react-router-dom";


const Product = () => {
    const {id}=useParams()
    const [product,setProduct]=useState()
    useEffect(()=>
    {
        fetchProduct()
    },[])
    const fetchProduct=async ()=>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product = await response.json()
        setProduct(product)
    }
    return (
        <div className="product_wrapper">
            {!product ? "Loading..." :
            <div>  <img src={product.image} alt={product.title}/>
            <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            </div>
            <h3>${product.price}</h3></div>}    
          
            
        </div>
    )
}

export default Product
