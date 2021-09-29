import React from 'react'
import styles from './Products.module.css'
import ShoppingCart from './ShoppingCart'

const Products = ({ products, newFilter, showCart, setShowCart, cartItems, setCartItems, addNewInvoice }) => {    

    if(newFilter !== '') {
        products = products.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase())
                                || p.category.toLowerCase().includes(newFilter.toLowerCase())
                                || p.manufacturer.toLowerCase().includes(newFilter.toLowerCase()))
    }

    const addToCart = (product) => {
        setShowCart(true)
        if(cartItems.some(i => i.name === product.name)) {
            const item = cartItems.find(i => i.name === product.name)
            const changedItem = {
                id: item.id,
                name: item.name,
                manufacturer: item.manufacturer,
                price: item.price,
                quantity: item.quantity + 1
            }            
            setCartItems(cartItems.map(i => i.id !== item.id ? i : changedItem))
        }
        else {
            const productObject = {
                id: product.id,
                name: product.name,
                manufacturer: product.manufacturer,
                price: product.price,
                quantity: 1
            }
            setCartItems(cartItems.concat(productObject))
        }
    }

    const showProducts = () =>
    products.map(p => 
        <div key={p.id} className={styles.Product}>
            <div><img src={p.image} alt={""} ></img></div>
            <div className={styles.manufacturer}> {p.manufacturer} </div>
            <div className={styles.name}> {p.name} </div>
            <div className={styles.description}> {p.description} </div>
            <div className={styles.category}> {p.category} </div>
            <div className={styles.price}> {`${p.price}$`} </div>
            <button className={styles.cartButton} onClick={() => addToCart(p)}> Add to cart </button>
        </div> 
        )
    
    return (
        <div>
            {showCart 
            ? <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} setShowCart={setShowCart} addNewInvoice={addNewInvoice} />
            : null}
            <div className={styles.ProductsContainer}> {showProducts()} </div> 
        </div>
    )
}

export default Products
