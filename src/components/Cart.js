import { useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteFromCart } from "../toolkit/slices/cart-slice";


function Cart() {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)
 
  return (
    <Container className="py-5">
      <h1>Welcome to Cart</h1>
      <div className="text-end my-5">
        <Button variant="danger" onClick={()=> dispatch(clearCart())}>Clear</Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>

            <th>image</th>
            <th>title</th>
            <th>categoty</th>
            <th>quantity</th>
            <th>price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((e) => {
              return (
                <tr key={e.id} className="my-auto">
                  <td><Image src={e.image} alt="" style={{width: '100px', height: '100px'}} /></td>
                  <td>{e.title}</td>
                  <td>{e.category}</td>
                  <td>{e.quantity}</td>
                  <td>{e.price }</td>
                  <td><Button variant="danger" onClick={()=>{dispatch(deleteFromCart(e))}}>Delete</Button></td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={3}>{12 }</td>
            <td colSpan={2}>
              ${totalPrice.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Cart;