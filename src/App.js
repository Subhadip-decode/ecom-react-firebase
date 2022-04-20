import React,{Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddProducts from './components/AddProducts';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ProductsContextProvider } from './global/ProductContext';
import { authz, db } from './config/Config';
export class App extends Component{ 

  state={
    	user: null
  }

  componentDidMount(){
    authz.onAuthStateChanged(user=>{
      if(user){
        db.collection('SignedUpUserData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })

        console.log(user);
      }
      else{
        this.setState({
          user:null
        })
      }
    })
  }

  render(){
  return (
    <ProductsContextProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home user={this.state.user}/>}/>
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