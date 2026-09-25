import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    let productId=useParams();
    // let{productId}=id
    // console.log(id);
    let {id}=productId;
    console.log(id);
    
    
  return (
    <div>Product {id}</div>
  )
}

export default Product