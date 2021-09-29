import React, { useState, useEffect } from 'react'
import styles from './NavBar.module.css'
import Users from './Users'
import userService from '../services/users'

const NavBar = ({ showInvoices, setShowInvoices, user, setUser, showAdminMode, setShowAdminMode }) => {
    const [ showUsers, setShowUsers ] = useState(false)
    const [ users, setUsers ] = useState([])
    const [ newUserName, setNewUserName ] = useState('')
    const [ newAddress, setNewAddress ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')

    useEffect(() => {
        userService
        .getAll()
        .then(initialUsers => {
          setUsers(initialUsers)
        })
        .catch(err => console.log(err))
      }, [])

    const addUser = (event) => {
        event.preventDefault()
        const userObject = {
          name: newUserName,
          address: newAddress,
          number: newNumber
        }
    
        userService
        .create(userObject)
        .then(returnedUser => {
          setUsers(users.concat(returnedUser))
          setNewUserName('')
          setNewAddress('')
          setNewNumber('')
        })
        .catch(err => console.log(err))
      }

    const deleteUser = (id) => {
        const user = users.find(u => u.id === id)
        if(window.confirm(`Delete ${user.name} ?`)){
        userService
        .remove(id)
        .then(response => {
            setUsers(users.filter(u => u.id !== id))
        })
        .catch(err => console.log(err))
        }
    }

    return (
      <div>
        <div className={styles.NavBarContainer}>
          <div className={styles.LoggedUser}> Logged in as: {user} </div>
          <span> IT Accessories Store </span>
          <div>
            <button onClick={ () => {showInvoices ? setShowInvoices(false) : setShowInvoices(true)}} > View user invoices </button>
            <button onClick={ () => {showUsers ? setShowUsers(false) : setShowUsers(true)}} > Show users </button>
            <button onClick={ () => {showAdminMode ? setShowAdminMode(false) : setShowAdminMode(true)}} > Admin mode </button>
          </div>              
        </div>
        <div>
          {showUsers
          ? <Users users={users} deleteUser={deleteUser} addUser={addUser} setUser={setUser} newUserName={newUserName}
              newAddress={newAddress} newNumber={newNumber} setNewUserName={setNewUserName}
              setNewAddress={setNewAddress} setNewNumber={setNewNumber} setShowUsers={setShowUsers} />
          : null}
        </div>   
      </div>
    )
}

export default NavBar
