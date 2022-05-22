import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//Import pages
import Landing from './content/Landing.comp';
import Cart from "./content/Cart.comp";
import AddToCart from "./content/AddToCart.comp";
import { ProductsProvider } from "../context/Products.context";
import Events from "./content/Events.comp";
import { CartProvider } from "../context/Cart.context";
import Ordered from "./content/Ordered.comp";
import { OrderProvider } from "../context/Order.context";
import { useEffect, useState } from "react";




const App = ({slideIndex = 0}) =>{

    return(<>
            <ProductsProvider>
                <CartProvider>
                    <OrderProvider>
                        <Swiper initialSlide={slideIndex} pagination = {{dynamicBullets : true}} modules = {[Pagination]} className="w-full h-full">
                            <SwiperSlide>
                                <Landing />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Events/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cart/>
                            </SwiperSlide>
                        </Swiper>
                        <AddToCart />
                        <Ordered/>
                    </OrderProvider>
                </CartProvider>
            </ProductsProvider>
        </>
    );
}

export default App;