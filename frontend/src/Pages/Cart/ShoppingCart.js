import React, { useEffect } from "react"
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap"
import { MdDelete } from "react-icons/md"
import Message from "../../Components/Message/Message"
import { addToCart, removeFromCart } from "../../Actions/CartActions"

const ShoppingCart = (locaton) => {
  const productId = useParams().id

  const [searchParams] = useSearchParams()

  const history = useNavigate()

  const quantity = searchParams.get("qty")

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  console.log(cartItems)
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history("/login?redirect=shipping")
  }

  return (
    <Row>
      <Col md={8}>
        <h1 className="mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col xs={2} sm={2} md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col xs={4} sm={4} md={4}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col xs={2} sm={2} md={2}>
                    ${item.price}
                  </Col>
                  <Col xs={2} sm={2} md={3}>
                    <Form.Select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={1} sm={1} md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <MdDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h4>
                Sub total (
                {cartItems.reduce(
                  (acc, item) => parseInt(acc) + parseInt(item.quantity),
                  0
                )}
                ) items
              </h4>
              $
              {cartItems
                .reduce((acc, item) => acc + item.quantity * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default ShoppingCart
