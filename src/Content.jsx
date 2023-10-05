import axios from 'axios'
import {useState, useEffect} from "react"
import {Route, Routes } from "react-router-dom";
import {ProductsIndex} from './ProductsIndex.jsx'
import {HomeCategory} from "./HomeCategory"



export function Content () {
  const [products, setProducts] = useState([])

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data)
      setProducts(response.data)
    })
  }
  useEffect(handleIndexProducts, [])


  return(
    <div>
      <Routes>
          <Route path="/" element = {<HomeCategory products={products}/>} />
          <Route path="/products" element={<ProductsIndex products={products} />} />
      </Routes>
    </div>
  )
}