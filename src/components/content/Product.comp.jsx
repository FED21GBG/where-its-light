import OpenClose from "../../hooks/OpenClose.hook";
import { useContext } from "react";
import ProductsContext from "../../context/Products.context";
const Product = ({product}) =>{
    const {updateCurrentProduct} = useContext(ProductsContext);
    const onProductClick = () =>{
        updateCurrentProduct(product.name);
        OpenClose('[add-tocart-panel]', 'open', 'DownUp');
    }
    return (
        <div className="flex items-center text-white h-[100px] w-full" onClick={()=>onProductClick()}>
            <div className="flex items-center justify-center flex-col border-2 border-white text-center h-[80px] w-[80px]">
                {product.when.date}
            </div>
            <div className="flex flex-col w-[calc(100%-80px)] pl-6">
                <div>
                    <h1 className=" text-2xl">{product.name}</h1>
                    <p className= "text-base">{product.where}</p>
                </div>
                <div className="flex justify-between border-b-2 border-b-slate-300">
                    <p>{product.when.from} - {product.when.to}</p>
                    <h3 className="text-lg text-[#37AEAB] font-bold font-FiraSans">{product.price} kr</h3>
                </div>
            </div>
        </div>
    )
}

export default Product;