import React from 'react'
import styles from './Filter.module.css'

const Filter = ({ newFilter, handleFilterChange }) => {
    return (
        <div className={styles.SearchBar}>
            <span>Find products:</span>
            <input value={newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter
