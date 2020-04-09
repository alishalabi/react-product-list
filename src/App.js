import React, {Component} from 'react';
import './App.css';
import data, {categoriesUnique, categoriesHistogramArray, count} from './data'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {currentlySelected : "All"}
  }
  setCategory(newCategory) {
    this.setState({
      currentlySelected : newCategory
    })
  }

  displayButtons() {
    const buttonsArray = categoriesHistogramArray.map(({name, count}) => {
      return (
        <button
          key={name}
          onClick={() => {
            this.setCategory(name)
          }}
        >
          {name}
        </button>
      )
    })
    return buttonsArray
  }

  displayProducts() {
    // use filter on this.state.currentlySelected (only if not all)
    if (this.state.currentlySelected === "All") {
      const productsArray = data.map(({id, name, price}) => {
        return (
          <div key={`${id}: ${name}`}>
            <h2>{name}</h2>
            <h4>{price}</h4>
          </div>)
      })
      return productsArray
    } else {
      const productsArray = data.filter(({category}) => {
        return category === this.state.currentlySelected
      }).map(({id, name, price}) => {
        return (
          <div key={`${id}: ${name}`}>
            <h2>{name}</h2>
            <h4>{price}</h4>
          </div>)
      })
      return productsArray
    }
  }

  render() {
    return (
      <div className="App">
        <div className="button-div">
          {this.displayButtons()}
        </div>
        <div>
          <h4>
            Current Category: {this.state.currentlySelected}
          </h4>
        </div>
        <div className="products-div">
          {this.displayProducts()}
        </div>
      </div>
    );
  }
}





export default App;
