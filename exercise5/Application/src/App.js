import React, { useState, useEffect } from 'react'
import Products from './components/Products'
import Filter from './components/Filter'
import NavBar from './components/NavBar'
import styles from './style.css'
import Invoice from './components/Invoice'
import productService from './services/products'
import invoiceService from './services/invoices'
import AdminMode from './components/AdminMode'

const App = () => {
  const [ products, setProducts ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ invoices, setInvoices ] = useState([])
  const [ showInvoices, setShowInvoices ] = useState(false)
  const [ showCart, setShowCart ] = useState(false)
  const [ cartItems, setCartItems ] = useState([])
  const [ user, setUser ] = useState("Matti Meikäläinen")
  const [ showAdminMode, setShowAdminMode ] = useState(false)

  /* GET all products */
  useEffect(() => {
    productService
    .getAll()
    .then(initialProducts => {
      setProducts(initialProducts)
    })
    .catch(error => console.log(error))
  }, [])

  /* GET all invoices */
  useEffect(() => {
    invoiceService
    .getAll()
    .then(initialInvoices => {
      setInvoices(initialInvoices)
    })
    .catch(err => console.log(err))
  }, [])


  const addNewInvoice = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let purchaseDate = `${day}.${month}.${year}`

    let totalSum = 0;
    cartItems.forEach(i => {
      totalSum += (i.quantity * i.price)
    });

    const invoiceObject = {
      buyerName: user,
      date: purchaseDate,
      totalSum: totalSum.toFixed(2)
    }

    invoiceService
    .create(invoiceObject)
    .then(returnedInvoice => {
      setInvoices(invoices.concat(returnedInvoice))
      setCartItems([])
      setShowCart(false)
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div style={styles}>
      <NavBar showInvoices={showInvoices} setShowInvoices={setShowInvoices} user={user} setUser={setUser} showAdminMode={showAdminMode} setShowAdminMode={setShowAdminMode} />
      {showInvoices ? <Invoice invoices={invoices} user={user} /> : null}
      {showAdminMode ? <AdminMode products={products} setProducts={setProducts} /> : null }
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <Products products={products} newFilter={newFilter} showCart={showCart} setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems} addNewInvoice={addNewInvoice} />
    </div>
  )
}

export default App;
