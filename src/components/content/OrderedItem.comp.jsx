import {ImBarcode} from 'react-icons/im'
const OrderedItem = ({item}) =>{
    console.log("itemsssssss----_", item);
    return (
        <>
            <div className="flex flex-col justify-center h-[100px] p-2">
                <p className="text-gray-700">What</p>
                <h1 className="text-[25px] font-bold font-sansita text-[#E9659A]">{item.name}</h1>
            </div>
            <div className="flex flex-col justify-center h-[130px] p-2">
                <p className="text-gray-700">Where</p>
                <h1 className="text-[20px] font-bold">{item.where}</h1>
                <p className="text-gray-700">Göteborg</p>
            </div>
            <div className="flex flex-row justify-around h-[65px]">
                <div className="w-full p-2 border-2 border-dotted border-black">
                    <p className="text-gray-700">When</p>
                    <h1 className="text-[20px] font-bold">{item.when.date}</h1>
                </div>
                <div className="w-full p-2 border-2 border-dotted border-black">
                    <p className="text-gray-700">From</p>
                    <h1 className="text-[20px] font-bold">{item.when.from}</h1>
                </div>
                <div className="w-full p-2 border-2 border-dotted border-black">
                    <p className="text-gray-700">To</p>
                    <h1 className="text-[20px] font-bold">{item.when.to}</h1>
                </div>
            </div>
            <div>
                <p className="text-gray-700">Info</p>
                <h1 className="text-gray-700">Seat c33 - bring umbrella</h1>
            </div>
            <div className="flex flex-col justify-center items-center text-9xl h-[150] w-full p-2">
                <ImBarcode/>
                <p className="text-center text-sm">4 5 E 3 F W 33 55</p>
            </div>
        </> 

    )
}

export default OrderedItem;