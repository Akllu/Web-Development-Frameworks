import React from 'react'
import styles from './UserForm.module.css'

const UserForm = (props) => {
    return (
        <div>
            <form className={styles.UserForm} onSubmit={props.addUser}>
                <div className={styles.Header}> Add a new user: </div>
                <label><span> Name: </span><input value={props.newUserName} onChange={ (event) => {props.setNewUserName(event.target.value)}} /> </label>   
                <label> <span> Address: </span> <input value={props.newAddress} onChange={ (event) => {props.setNewAddress(event.target.value)}} /> </label>
                <label> <span> Phone number: </span> <input value={props.newNumber} onChange={ (event) => {props.setNewNumber(event.target.value)}} /> </label>
                <button type="submit">Add user</button>
            </form>
        </div>
    )
}

export default UserForm
