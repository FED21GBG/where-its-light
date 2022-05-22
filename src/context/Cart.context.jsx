import {useState, useEffect} from 'react'
import {createContext} from 'react'
const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const localstorageCart = localStorage.getItem("cart");
        if(localstorageCart){
            setCartItem(JSON.parse(localstorageCart));
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cartItems));
        calculateTotalPrice();
    }, [cartItems])

    // calculate the total price of all the products
    const calculateTotalPrice = () =>{
        if([...cartItems].length > 0){
            console.log("here it runs");
            const reduced = cartItems.reduce((acc, x) => acc + (x.price * x.productQuantity), 0);
            setTotalPrice(reduced);
        }
    }

    //onCart is a function to add or subtract quantity of a product or add a new product to cartItems useState
    const onCart = (action, product = "")=>{
        const exist = cartItems.find((x)=> x.name === product.name);
        if(exist){
            const CartItemsCopy = [...cartItems];
            const indexOfObject = cartItems.findIndex(object =>{
                return object.name === exist.name;
            })

            if(action === "add"){
                let updated = "";
                if(exist.productQuantity > 0 && exist.productQuantity < 11 && (exist.productQuantity + 1) < 11){
                    updated = {...exist, productQuantity : exist.productQuantity + 1}
                }else{
                    updated = {...exist, productQuantity : 10}
                }

                CartItemsCopy[indexOfObject] = {...updated};
                //exist.quantity = exist.quantity + product.qty;
                setCartItem([...CartItemsCopy]);
                return;
            }
            if(action === "subtract"){
                
                let updated = "";
                if(exist.productQuantity > 1 && exist.productQuantity < 11){
                    updated = {...exist, productQuantity : exist.productQuantity - 1}
                }

                if(indexOfObject !== -1){
                    if(!updated){
                        CartItemsCopy.splice(indexOfObject, 1);
                    }else{
                        CartItemsCopy[indexOfObject] = {...updated};
                    }
                }
                //exist.quantity = exist.quantity + product.qty;
                setCartItem([...CartItemsCopy]);
                return;
            }
        }

        if(action === "remove"){
            setCartItem([]);
            return;
        }

        setCartItem([...cartItems, {
            name : product.name,
            productQuantity : product.productQuantity,
            price : product.price,
            where : product.where,
            when: {
                date: product.when.date,
                from: product.when.from,
                to: product.when.to
            }

        }])
    }
    return(
        <CartContext.Provider value = {{cartItems, onCart, totalPrice : totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;