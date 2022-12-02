import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import Product from '../../Components/Product/Product';
import products from '../../products'

const HomePage = () => {
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