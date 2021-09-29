import React from 'react'
import styles from './Filter.module.css'

const Filter = ({ newFilter, setNewFilter }) => {
    return (
        <div className={styles.SearchBar}>
            <span>Search for products by name, manufacturer or category:</span>
            <input value={newFilter} onChange={ (event) => {setNewFilter(event.target.value)}} />
        </div>
    )
}

export default Filter
