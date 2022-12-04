import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../../Components/Product/Product';


const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
        const getProducts = async ()=>{
        const {data} = await axios.get('/api/products')
        setProducts(data)
        }
        getProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row sm={2} md={2} lg={3} xl={4}>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage