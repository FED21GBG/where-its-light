import {useContext} from 'react';
import CartContext from "../../context/Cart.context";
import CartProduct from "./CartProduct.comp";
import OpenClose from '../../hooks/OpenClose.hook';
import OrderContext from '../../context/Order.context';

const Cart = () =>{
    const {cartItems, totalPrice} = useContext(CartContext);
    const {orderAction} = useContext(OrderContext)

    const PlaceOrder = () =>{
        orderAction();
        OpenClose('[orders-panel]', 'open', 'DownUp')
    }

    return (
        <section className="flex justify-center items-center flex-col gap-4 w-full h-full bg-[#231F42] m-auto md:w-[500px] p-5">
            <h1 className="text-5xl text-[#ff6b6b] font-sansita">Order</h1>

            {cartItems.length > 0 ? (
                <>
                    <div className="flex flex-col items-center p-5 h-[650px] w-full gap-6 overflow-auto no-scrollbar shadow-[inset_0px_-20px_20px_0px_#00000078]">
                        {cartItems.map((item) =>{
                            return <CartProduct key = {item.name} cartProduct = {item}/>
                        })}
                    </div>
                    <div className="text-center text-white">
                        <p className="text-xl">Totalt värde på order</p>
                        <h1 className=" text-4xl">{totalPrice} kr</h1>
                    </div>
                    <button onClick= {()=>PlaceOrder()} className=" h-12 w-full bg-[#37AEAB] font-extrabold rounded-xl text-white">Skicka order</button>
                </>
            ):(
                <h1 className='text-white text-xl'>Cart Is Empty...</h1>
            )}
        </section>
    );
}

export default Cart;