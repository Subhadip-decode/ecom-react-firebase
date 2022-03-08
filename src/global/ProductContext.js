import { collection, getDocs } from 'firebase/firestore';
import React,{createContext} from 'react';
import {db} from '../config/Config'

export const ProductsContext = createContext();

export class ProductsContextProvider extends React.Component{
    //empty state of products
    
    state={
        products:[]
    }

    componentDidMount(){
        const prevProducts = this.state.products;
        const colRef = collection(db, 'Products');
        getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc)=>{
                prevProducts.push({...doc.data(),id:doc.id})
            })
            // console.log(prevProducts)
            this.setState({
                products: prevProducts
            })
        })
        .catch(err=>{
            console.log(err.message);
        })
        // console.log(this.state.products);
    }

    render(){
        return (
            <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}