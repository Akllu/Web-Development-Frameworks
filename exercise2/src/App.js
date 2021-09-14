import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addItems = (item) => {
    let lastId = this.state.items.length;
    let randQty = Math.floor(Math.random() * 20);
    this.setState({ items: [...this.state.items, {id: lastId+1, value: (item), qty: randQty, unit: 'x'}]})
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div> <b> Add a random amount of a specific food: </b> </div>
      <button style={{marginRight: "15px"}} onClick={() => this.addItems("Apple")}> Apple </button>
      <button style={{marginRight: "15px"}} onClick={() => this.addItems("Pear")}> Pear </button>
      <button style={{marginRight: "15px"}} onClick={() => this.addItems("Meat")}> Meat </button>
      <button onClick={() => this.addItems("Beer")}> Beer </button>
    </div>
  }
}

export default App;