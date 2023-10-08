/* eslint-disable react/prop-types */

export function HomeCategory(props) {

  const handleClick = (category, category_id) => {
    props.onCategoryChange(category, category_id)
  }

  const handleIndex = () => {
    props.onIndex()
  }

  return(
    <div>
      <button onClick={() => handleIndex()}>All Products</button>
      <button onClick={() => handleClick('electronics', 1)}>Electronics</button>
      <button onClick={() => handleClick('clothing', 2)}>Clothing</button>
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