import React from "react";
import AddProduct from "./AddProduct"
import Product from "./Product";
import Pagination from "./Pagination"
import { Flex } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { useEffect,useState } from "react";
import style from "./product.module.css";
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
 
  const[product,setproduct]=useState([])
  console.log(product)
  
  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then((d)=>d.json())
    .then((data)=>{
       
        setproduct(data)
       
        
    })


    
},[])


 
const [page,setPage]=useState(1);
const [todo,settodo]=useState([]);
const [limit,setLimit]=useState(3)
console.log(page);

 

useEffect(()=>{
 
 axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((response)=>{
   settodo(response.data);
 })  
 },[page,limit])

  return (
   
    <div>

      <AddProduct></AddProduct>
      <br/>
      <Grid className={style.box}>
      {product.map((ele)=>{
        return(<Product ele={ele}></Product>)
      })}
      </Grid>
      <br/>
      
     <Pagination setLimit={setLimit} limit={limit} page={page} setPage={setPage} ></Pagination>
     </div>
    
  );
};

export default Products;