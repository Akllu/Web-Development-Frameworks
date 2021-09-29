import React from 'react'
import styles from './ProductForm.module.css'

const ProductForm = (props) => {
    return (
        <div>
            <form className={styles.ProductForm} onSubmit={props.addNewProduct}>
                <div className={styles.Header}> Add a new product: </div>
                <label><span> Name: </span><input value={props.newName} onChange={ (event) => {props.setNewName(event.target.value)}} /> </label>
                <label><span> Manufacturer: </span><input value={props.newManufacturer} onChange={ (event) => {props.setNewManufacturer(event.target.value)}} /> </label>
                <label><span> Category: </span><input value={props.newCategory} onChange={ (event) => {props.setNewCategory(event.target.value)}} /> </label>
                <label><span> Description: </span><input value={props.newDescription} onChange={ (event) => {props.setNewDescription(event.target.value)}} /> </label>
                <label><span> Price: </span><input value={props.newPrice} onChange={ (event) => {props.setNewPrice(event.target.value)}} /> </label>
                <label><span> Image URL: </span><input value={props.newImage} onChange={ (event) => {props.setNewImage(event.target.value)}} /> </label>
                <button type="submit">Add product</button>
            </form>
        </div>
    )
}

export default ProductForm
