import axios from 'axios'
import {useState, useEffect} from "react"
import {Route, Routes } from "react-router-dom";
import {HomeCategory} from "./HomeCategory"
import {CartedProductsIndex} from "./CartedProductsIndex"

export function Content () {
  const [products, setProducts] = useState([])

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      // console.log(response.data)
      setProducts(response.data)
    })
  }

  const handleIndexCategoryProducts = (category, category_id) => {
    // console.log(category)
    // console.log(category_id)
    axios.get(`http://localhost:3000/category_index.json?category_id=${category_id}`).then((response) => {
      setProducts(response.data)
    })
  }

  useEffect(handleIndexProducts, [])


  return(
    <div>
      <Routes>
          <Route path="/" element = {<HomeCategory products={products} onCategoryChange={handleIndexCategoryProducts} onIndex={handleIndexProducts}/>} />
          <Route path="/cart" element = {<CartedProductsIndex/>}/>
      </Routes>
    </div>
  )
}