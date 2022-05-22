// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OpenClose from '../../hooks/OpenClose.hook';
import {AiFillCloseCircle} from 'react-icons/ai'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import { useContext } from "react";
import OrderContext from "../../context/Order.context";
import OrderedItem from "./OrderedItem.comp";
const Ordered = ()=>{
    const {orderItems} = useContext(OrderContext);
    return (
        <section className="flex justify-center items-center flex-col w-full h-full bg-[linear-gradient(#E9659A,_#231F42)] m-auto md:w-[500px] p-5 fixed top-0 top-full left-1/2 transform -translate-x-1/2 z-50 gap-5 transition-all duration-500" orders-panel = ''>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-[350px] h-[550px]"
          >
              {[...orderItems].length > 0 ? (
                  orderItems.map((order) =>{return(

                    <SwiperSlide key={'ownedItem_' + order[0].name} className=" bg-white text-black p-4">
                      <OrderedItem item = {order[0]} />
                    </SwiperSlide>
                    
                    )})
              ):(
                <SwiperSlide className="flex justify-center items-center">
                  <h1 className="text-white text-4xl text-center">No Active Tickets Found</h1>
                </SwiperSlide>
              )}
          </Swiper>
          <span onClick={()=>OpenClose('[orders-panel]', 'close', 'DownUp')}><AiFillCloseCircle className=' text-4xl text-white'/></span>
        </section>
      );
}

export default Ordered;