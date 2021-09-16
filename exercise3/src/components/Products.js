import React from 'react'
import styles from './Products.module.css'

const Products = ({ products, newFilter }) => {
    if(newFilter !== '') {
        products = products.filter(p => p.name.toLowerCase().includes(newFilter.toLowerCase()))
    }

    const showProducts = () =>
        products.map(p => 
            <div key={p.id} className={styles.Product}>
                <div><img src={`/images/${p.image}`} alt={""} ></img></div>
                <div className={styles.name}> {p.name} </div>
                <div className={styles.price}> {`${p.price}$`} </div>
            </div> )
    
    return (
        <div className={styles.ProductsContainer}> {showProducts()} </div>
    )
}

export default Products
