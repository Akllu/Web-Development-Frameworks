import React, { useState } from 'react'
import styles from './Users.module.css'
import UserForm from './UserForm'

const Users = (props) => {
    const [ showUserForm, setShowUserForm ] = useState(false)

    const userButtonClicked = (userName) => {
        props.setUser(userName)
        props.setShowUsers(false)
    }

    const showUsers = () =>
        props.users.map(u => 
            <div key={u.id} className={styles.User}>
                <div> {u.name} </div>
                <div> {u.address} </div>
                <div> {u.number} </div>
                <div> <button onClick={() => userButtonClicked(u.name)} > Use user </button> </div>
                <div> <button className={styles.deleteButton} onClick={() => {props.deleteUser(u.id)}} > Delete user </button> </div> 
            </div> )
    return (
        <div className={styles.UsersContainer}>
            {showUsers()}
            <div>
                <button className={styles.newUserButton} onClick={ () => {showUserForm ? setShowUserForm(false) : setShowUserForm(true)} } > Create a new user </button> 
            </div>
            <div>
                {showUserForm 
                ? <UserForm addUser={props.addUser} newUserName={props.newUserName} newAddress={props.newAddress} newNumber={props.newNumber}
                        setNewUserName={props.setNewUserName} setNewAddress={props.setNewAddress} setNewNumber={props.setNewNumber} /> 
                : null} 
            </div>
        </div>
    )
}

export default Users
