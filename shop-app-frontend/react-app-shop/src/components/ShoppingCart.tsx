import React from "react"; 
import {useState } from 'react';
import {CartItem } from "../components/CartItem.tsx";
import { Offcanvas, Stack, Button} from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import { formatCurrency } from "./formatCurrency.ts";
import 'bootstrap/dist/css/bootstrap.css';

export function ShoppingCart({isOpen, cartItems}) {
    const {closeCart, emptyCart, displayMessage } = useShoppingCart()
    const [checkout, setCheckout] = useState(false)
    
    function handleCheckout(){ 
        setCheckout(true)
    }

 
    return <Offcanvas onHide={closeCart} placement="end"show={isOpen}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
            Total{" "}
       
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = cartItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )} 
            </div>
            
            <Button onClick={handleCheckout}>Checkout</Button>
            {checkout && <Button variant="success"onClick={() => emptyCart()}className="btn btn-success">Buy now</Button>}
            {displayMessage && <div className="alert alert-success" role="alert">
            Transaction Successful
            </div>}
            
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}