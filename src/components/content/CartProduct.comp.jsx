import CartContext from "../../context/Cart.context";
import {useContext, useState} from 'react';

const CartProduct = ({cartProduct}) =>{
    const [quantity, setQuantity] = useState(cartProduct.productQuantity)
    const {onCart} = useContext(CartContext);
    
    const onCartSubtract = () =>{
        if(quantity > -1){
            onCart('subtract', cartProduct);
            setQuantity(quantity - 1)
        }
    }
    const onCartAdd = () =>{
        if(quantity > 0 && quantity < 10){
            onCart('add', cartProduct);
            setQuantity(quantity + 1)
        }else{
            setQuantity(10);
        }
    }
    return (
        <div className="flex flex-col justify-between h-[115px] w-full border-2 border-[#ff8888] rounded-md text-white">
            <div className="p-1">
                <h1 className="text-xl">{cartProduct.name}</h1>
                <p className="text-sm">{cartProduct.when.date} {cartProduct.when.from} - {cartProduct.when.to}</p>
            </div>
            <div className="flex flex-row h-[50px] w-full">
                <button className="flex items-center justify-center h-full w-2/3 border-[1px] border-[#ff8888] text-4xl" onClick = {()=>onCartSubtract()}>-</button>
                <input type="text" value = {quantity} disabled className="h-full w-full border-[1px] border-[#ff8888] text-4xl bg-transparent text-center"/>
                <button className="flex items-center justify-center h-full w-2/3 border-[1px] border-[#ff8888] text-4xl" onClick = {()=>onCartAdd()}>+</button>
            </div>
        </div>
    );
}
export default CartProduct;