import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Products from './components/products';
import Navbar from './components/navbar.jsx'
import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap' 
import { About } from './pages/About'
import { Admin } from './pages/Admin'
import { ShoppingCartProvider } from './context/ShoppingCartContext.tsx'

class App extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
   return (
    <>
    <ShoppingCartProvider>
      <Navbar/>
      <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
   )
  } 
}
export default App;
