import {useState, useEffect, useContext} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import OpenClose from '../../hooks/OpenClose.hook';
import ProductsContext from '../../context/Products.context';
import CartContext from '../../context/Cart.context';
const AddToCart = () =>{
    const {onCart} = useContext(CartContext);
    const [currentProductData, setCurrentProductData] = useState([{
        "name": "Kajsas kör",
        "price": 0,
        "where": "Götaplatsen",
        "when": {
            "date": "13 Dec",
            "from": "15.00",
            "to": "16:00"
        }
    }]);
    const {currentProduct} = useContext(ProductsContext);

    useEffect(()=>{
        if([...currentProduct].length > 0){
            console.log("changing data");
            setCurrentProductData([...currentProduct]);
        }
    }, [currentProduct]);

    const [quantity, setQuantity] = useState(1);

    const quantityFunc = (action) =>{
        if(action === "add"){
            if(quantity > 0 && quantity < 10){
                setQuantity(parseInt(quantity) + 1);
            }else{
                setQuantity(10);
            }

        }else if(action === "subtract"){
            if(quantity > 1){
                setQuantity(parseInt(quantity) - 1);
            }else{
                setQuantity(1);
            }
        }
    }

    const onCartAdd = ()=>{
        onCart('add', {
            name : currentProductData[0].name,
            productQuantity : quantity,
            price : currentProductData[0].price,
            where : currentProductData[0].where,
            when: {
                date: currentProductData[0].when.date,
                from: currentProductData[0].when.from,
                to: currentProductData[0].when.to
            }
    
        });
        OpenClose('[add-tocart-panel]', 'close', 'DownUp');

    }
    return (
        <section className="flex items-center flex-col w-full h-full bg-[#231F42] m-auto md:w-[500px] p-5 fixed top-0 top-full left-1/2 transform -translate-x-1/2 z-50 gap-5 transition-all duration-500" add-tocart-panel = ''>
            <h1 className="text-5xl text-[#ff6b6b] font-sansita">Event</h1>
            <div className="flex justify-between items-center flex-col h-full">
                <h3 className=" gap-7 text-xl text-center justify-between text-white">You are about to score some tickets to</h3>

                <div className="text-center text-white">
                    <h1 className=" text-4xl text-center">{currentProductData[0].name}</h1>
                    <p className="text-lg">{currentProductData[0].when.date} kl {currentProductData[0].when.from} - {currentProductData[0].when.to}</p>
                    <p className="text-gray-300">@{currentProductData[0].where}</p>
                </div>

                <div className="flex flex-col items-center border-2 border-[#ff8888] h-44 justify-between w-72">
                    <div className=" text-5xl h-full flex text-white items-center justify-center">
                        <h1>{parseInt(currentProductData[0].price) * parseInt(quantity)}</h1>
                        <span>kr</span>
                    </div>
                    <div className="flex text-white h-2/6">
                        <button className="flex items-center justify-center h-full w-2/3 border-[1px] border-[#ff8888] text-4xl" onClick = {()=>quantityFunc("subtract")}>-</button>
                        <input type="text" value = {quantity} disabled className="h-full w-full border-[1px] border-[#ff8888] text-4xl bg-transparent text-center"/>
                        <button className="flex items-center justify-center h-full w-2/3 border-[1px] border-[#ff8888] text-4xl" onClick = {()=>quantityFunc("add")}>+</button>
                    </div>
                </div>
                <button className=" h-12 w-full bg-[#37AEAB] font-extrabold rounded-xl text-white" onClick = {()=>onCartAdd()}>Add To Cart</button>
            </div>
            <span onClick={()=>OpenClose('[add-tocart-panel]', 'close', 'DownUp')}><AiFillCloseCircle className=' text-4xl text-white'/></span>
        </section>
    )
}

export default AddToCart;