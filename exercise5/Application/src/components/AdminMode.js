import React, { useState } from 'react'
import styles from './AdminMode.module.css'
import ProductForm from './ProductForm'
import productService from '../services/products'

const AdminMode = ({ products, setProducts }) => {
    const [ newName, setNewName ] = useState('')
    const [ newManufacturer, setNewManufacturer ] = useState('')
    const [ newCategory, setNewCategory ] = useState('')
    const [ newDescription, setNewDescription ] = useState('')
    const [ newPrice, setNewPrice ] = useState('')
    const [ newImage, setNewImage ] = useState('')

    const addNewProduct = (event) => {
        event.preventDefault()
        const productObject = {
          name: newName,
          manufacturer: newManufacturer,
          category: newCategory,
          description: newDescription,
          price: newPrice,
          image: newImage
        }
    
        productService
        .create(productObject)
        .then(returnedProduct => {
          setProducts(products.concat(returnedProduct))
          setNewName('')
          setNewManufacturer('')
          setNewCategory('')
          setNewDescription('')
          setNewPrice('')
          setNewImage('')
        })
        .catch(err => console.log(err))
    }

    const deleteProduct = (id) => {
        const product = products.find(p => p.id === id)
        if(window.confirm(`Delete ${product.manufacturer} ${product.name}?`)) {
            productService
            .remove(id)
            .then(res => {
                setProducts(products.filter(p => p.id !== id))
            })
            .catch(err => console.log(err))
        }
    }

    const showProducts = () =>
    products.map(p => 
        <div className={styles.ProductsContainer}  key={p.id}>
            <div className={styles.Products}>
            <div className={styles.ProductName}> {p.manufacturer} {p.name} </div>
            <button className={styles.DeleteButton} onClick={() => deleteProduct(p.id)}> Delete product </button>
            </div>
        </div> 
        )

    return (
        <div>
            <ProductForm addNewProduct={addNewProduct} newName={newName} newManufacturer={newManufacturer} newCategory={newCategory} 
            newDescription={newDescription} newPrice={newPrice} newImage={newImage}
            setNewName={setNewName} setNewManufacturer={setNewManufacturer} setNewCategory={setNewCategory}
            setNewDescription={setNewDescription} setNewPrice={setNewPrice} setNewImage={setNewImage} 
            />
            <div className={styles.AdminProducts}> {showProducts()} </div>
        </div>
    )
}

export default AdminMode
