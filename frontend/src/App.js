import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';

const App = () => {

  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
