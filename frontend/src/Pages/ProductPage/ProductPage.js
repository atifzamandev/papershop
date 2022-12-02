import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../../Components/Rating/Rating';
import products from '../../products';

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((prod) => prod._id === id)
  console.log(product.name)

  return (
    <>
      <Link className='btn btn-success my-3' to="/">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name}></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroupItem>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={2}>
          <Card>

            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>
                    Pice
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>

              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Stock:</Col>
                  <Col>{product.countInStock ? "In Stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <Button className='btn-block position-relative' type='button' disabled={product.countInStock === 0}>ADD TO CARD</Button>
                  </Col>
                </Row>
              </ListGroupItem>

            </ListGroup>

          </Card>
        </Col>

      </Row>

    </>
  )
}

export default ProductPage