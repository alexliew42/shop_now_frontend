/* eslint-disable react/prop-types */

export function HomeCategory(props) {

  const handleClick = (category, category_id) => {
    console.log(category, category_id)
    props.onCategoryChange(category, category_id)
  }

  const handleIndex = () => {
    props.onIndex()
  }

  return(
    <div>
      <button onClick={() => handleIndex()}>All Products</button>
      <button onClick={() => handleClick('electronics', 1)}>Electronics</button>
      <a href="/products/2">Clothing</a>
      {props.products.map((product) => (
        <div key={product.id}>
          <img src={product.image}/>  
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  )
}