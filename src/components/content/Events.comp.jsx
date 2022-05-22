import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/Products.context";
import OpenClose from "../../hooks/OpenClose.hook";
import Product from "./Product.comp";

const Events = () =>{
    const {products} = useContext(ProductsContext);
    const [searchList, setSearchList] = useState([])

    useEffect(()=>{
        setSearchList(products);
    }, [products])
    const filterTheList = (e) => {
        const keyword = e.target.value;
        const filtered = products.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toUpperCase().includes(keyword.toUpperCase())));
        setSearchList(filtered)
    }

    return (
            <section className="flex justify-center items-center flex-col gap-4 w-full h-full bg-[#231F42] m-auto md:w-[500px] p-5 relative">
                <h1 className="text-5xl text-[#ff6b6b] font-sansita">Events</h1>
                <button onClick = {()=>OpenClose('[orders-panel]', 'open', 'DownUp')} className="absolute right-3 top-6 h-10 w-28 rounded-2xl text-white text-sm">View My Tickets</button>
                <div className="flex justify-center items-center h-12 w-full">
                    <input onChange={filterTheList} type="text"  placeholder="Search ..." className="h-12 w-full rounded-md pl-12 pr-1 py-1 bg-[#ffffff21]"/>
                </div>
                <div className="flex flex-col gap-3 w-full h-full">
                {searchList.map((x)=>{
                    return <Product key = {x.name} product = {x}/>
                })}
                </div>
            </section>
    );
}

export default Events;