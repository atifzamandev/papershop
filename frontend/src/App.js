import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import HomePage from './Pages/Home/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ShoppingCart from './Pages/Cart/ShoppingCart';

const App = () => {

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path='/cart'>
            <Route index element={<ShoppingCart />} />
            <Route path=":id" element={<ShoppingCart />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
