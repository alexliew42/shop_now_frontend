/* eslint-disable react/prop-types */

export function HomeCategory(props) {
  return(
    <div>
      <a href="/products/1">Electronics</a>
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