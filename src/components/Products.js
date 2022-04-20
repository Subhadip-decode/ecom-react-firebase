import React,{useContext} from 'react'
import { ProductsContext } from '../global/ProductContext'

export const Products = () => {
    const {products} = useContext(ProductsContext);
    // console.log(products);
  return (
    <div>
      <>
            {products.length !== 0 && <h1 className='productTitle'>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.productImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.productName}
                        </div>
                        <div className='product-price'>
                            Rs {product.productPrice}.00
                    </div>
                        <button className='addcart-btn'>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    </div>
  )
}

// onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}