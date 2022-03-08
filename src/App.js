import React,{Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddProducts from './components/AddProducts';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ProductsContextProvider } from './global/ProductContext';
export class App extends Component{ 
  render(){
  return (
    <ProductsContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/addproducts' element={<AddProducts/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={<Login history={this.props.history}/>}/>
      </Routes>
    </BrowserRouter>
    </ProductsContextProvider>
  )
}
}
export default App