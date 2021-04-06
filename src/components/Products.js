import React,{useState,useEffect} from 'react'
import {
    Link
  } from "react-router-dom";

const Products = () => {
    
    const [products,setProducts]=useState([])
    useEffect(()=>
    {
        fetchProducts()
    },[])
    const fetchProducts = async () =>{
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        setProducts(products)
    }
    return (
        <div className="products_wrapper">
          {products.length===0? "Loading...":products.map((product)=>{
            return <Link style={{ textDecoration: 'none' }} to={`/products/${product.id}`} key={product.id} className="card">
                <div className="image" >
                    <img src={product.image} alt={product.title}/>
                </div>
                
                <div className="card_info">
                    <p  style={{color:"blue",fontWeight:"600",marginBottom:"10px"}}>
                    {product.title}
                    </p>
                    <p style={{color:"green",fontWeight:"600"}}>${product.price}</p>
                </div>

                      <button className="cart_btn">Add to Cart</button>

                 

                
            </Link>
          })}
           
        </div>
    )
}

export default Products
