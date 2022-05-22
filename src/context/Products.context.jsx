import { createContext, useState, useEffect } from "react";
//import WhereItsAt from "../api/WhereItsAt";
import Api from '../api/Api.json';
const ProductsContext = createContext();

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState([]);
    useEffect(() => {
        function fetchData() {
            setProducts(Api.events);
        }
        fetchData();

    });

    const updateCurrentProduct = (productName) =>{
       // console.log("-->fff-->",product);
        var productIndex = products.map(function(x) {return x.name; }).indexOf(productName);
        setCurrentProduct([products[productIndex]])
        console.log("clicked -->",[products[productIndex]]);
        //setCurrentProduct(product);
    }

    // useEffect(()=>{
    //     ///------->din api funkar inte pga cors problem som blockerar mig från att använda den. Jag skrev lösningen nedan. <-------///

    //     // const responseFunc = async () =>{
    //     //     const response = await WhereItsAt.get('/events');
    //     //     setProductsList(response.data)
    //     // }
    //     // responseFunc();
    //     //setProductsList(Api.events);
    // }, [])
    
    return(
        <ProductsContext.Provider value={{products : products, updateCurrentProduct, currentProduct : currentProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContext;