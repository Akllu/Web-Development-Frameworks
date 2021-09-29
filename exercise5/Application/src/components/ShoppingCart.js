import React from 'react'
import styles from './ShoppingCart.module.css'

const ShoppingCart = ({ cartItems, setCartItems, setShowCart, addNewInvoice }) => {

  let totalSum = 0;
  cartItems.forEach(i => {
    totalSum += (i.quantity * i.price)
  });

  const RemoveFromCart = (product) => {
    const item = cartItems.find(i => i.name === product.name)
    if(item.quantity > 1) {
      const changedItem = {
        id: item.id,
        name: item.name,
        manufacturer: item.manufacturer,
        price: item.price,
        quantity: item.quantity - 1
      }
      setCartItems(cartItems.map(i => i.id !== item.id ? i : changedItem))
    }
    else {
      setCartItems(cartItems.filter(i => i.id !== item.id))
      if(cartItems.length <= 1) {
        setShowCart(false)
      }
    }
  }

    return ( 
        <div className={styles.CartContainer}>
        <span> Shopping cart </span>
          <table>
            <tbody>
              <tr>
                <th> Product </th>
                <th> Quantity </th>
                <th> Price </th>
              </tr>
              {cartItems.map(i => 
              <tr key={i.id}>
                <td> {i.manufacturer} {i.name} </td>
                <td> <button className={styles.DeleteButton} onClick={() => RemoveFromCart(i)} > - </button> {i.quantity} </td>
                <td> {i.price} </td>
              </tr>
              )}
              <tr>
                <th></th>
                <th></th>
                <th className={styles.TotalHeader}> Total: </th> 
              </tr>
              <tr>
                <th></th>
                <th> <button className={styles.BuyButton} onClick={() => (addNewInvoice())} > Buy products </button> </th>
                <th> {totalSum.toFixed(2)}€ </th>
              </tr>
            </tbody>
          </table>
          <span style={{marginBottom: "15px"}}> </span>
      </div>   
    )
}

export default ShoppingCart
