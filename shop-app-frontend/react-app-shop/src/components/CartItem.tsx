import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import { Stack } from "react-bootstrap";
import {Button} from 'react-bootstrap'

export function CartItem(item) {
    const {removeFromCart} = useShoppingCart()

    return (
        <Stack direction="horizontal" className="d-flex align-items-center"gap={5}>
            <div className="me-auto fs-4"key={item.id}>
                    {item.name} - {item.price} BGN 
                    x{item.quantity} 
                </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
        
    )

}
