import {useState, useEffect, useContext} from 'react'
import {createContext} from 'react'
import CartContext from './Cart.context'
const OrderContext = createContext()

export const OrderProvider = ({children}) => {
    const {cartItems, onCart} = useContext(CartContext);

    const [productsToOrder, setProductsToOrder] = useState([]);
    const [orderItems, setOrderItems] = useState([]);

    useEffect(()=>{
        const localstorageOrder = localStorage.getItem("orders");
        if(localstorageOrder){
            localStorage.setItem('orders', JSON.stringify(orderItems))
            setOrderItems(JSON.parse(localstorageOrder));
        }

        if([...cartItems].length > 0){
            setProductsToOrder(cartItems);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('orders', JSON.stringify(orderItems))
    },[orderItems])
    // calculate the total price of all the products
    const orderAction = () =>{
        setOrderItems([...orderItems, cartItems])
        onCart('remove');
    }

    return(
        <OrderContext.Provider value = {{orderAction, orderItems : orderItems}}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext;