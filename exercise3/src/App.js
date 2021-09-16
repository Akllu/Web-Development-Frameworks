import React, { useState } from 'react'
import data from './data.json'
import Products from './components/Products'
import Filter from './components/Filter'
import TopBar from './components/TopBar'
import styles from './style.css'


const App = () => {
  const [ products ] = useState(data.products)
  const [ newFilter, setNewFilter ] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  return (
    <div style={styles}>
      <TopBar />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Products products={products} newFilter={newFilter} />
    </div>
  )
}

export default App;
