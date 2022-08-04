import React from 'react'; 
import { useShoppingCart } from '../context/ShoppingCartContext.tsx';
 

export function Product({_id, name, price, description}) {

    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(_id)
        return (
            <div className="card" style={{width: "18rem"}}>
                 <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <em><p className="card-text">{description}</p></em>
                    <b><p className="card-text">{price} BGN.</p></b>
                    <div className='mt-auto'> 

                    {quantity === 0 ? (
                        <button className="btn btn-primary my-1" onClick={() => increaseCartQuantity(_id, name, price)}>Add to cart</button>
                    ): <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                        <div className='d-flex align-items-center justify-content-center' style={{gap: ".5rem"}}>
                        <button onClick={() => decreaseCartQuantity(_id)} className="btn btn-primary">-</button>
                        <div>
                        <span className='fs-4 m-1'>{quantity} in cart</span>
                        </div>
                        <button onClick={() => increaseCartQuantity(_id, name, price)} className="btn btn-primary m-2" >+</button>
                        </div>
                        <button onClick={() => removeFromCart(_id)} className='btn btn-danger' size="sm">remove</button>
                        </div>}
                   </div>
                </div>
                
            </div>
        )
    }

export default Product;