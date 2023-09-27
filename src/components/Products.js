
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPorducts } from '../toolkit/slices/products-slice';
import { addToCart } from '../toolkit/slices/cart-slice';


function Products() {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // console.log(products);
  console.log();

  useEffect(() => {
    dispatch(fetchPorducts())
  },[])



  return (
    <Container className='py-5'>
      <Row className='py-5'>
        {products &&
          products.map((e) => {
            return (
              <Col key={e.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={e.image} style={{height: '300px' }}/>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                      {e.category}
                    </Card.Text>
                    <Card.Text>
                      ${e.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      onClick={()=>{dispatch(addToCart(e))}}
                    >Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
        
      </Row>      
    </Container>
  )
}

export default Products;