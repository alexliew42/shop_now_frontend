/* eslint-disable react/prop-types */

export function ProductsIndex(props) {
  return (
    <div>
      <h1>Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>      
          <img src={product.image}/>
          <div>{product.name}</div>
          <div>${product.price}</div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  )
}