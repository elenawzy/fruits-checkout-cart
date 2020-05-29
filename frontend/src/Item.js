import React, {Component} from "react";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inCart: 0
    };
  }

  handleAddItem = () => {
    this.setState({inCart: this.state.inCart + 1});
    axios.post("/addItem", {
      price: this.props.price
    }).then(response => {
      console.log("Data Sent Successfully.");
    }).catch((error) => {
      console.log("Error while adding item.");
    });
  };

  handleRemoveItem = () => {
    if (this.state.inCart > 0) {
      this.setState({inCart: this.state.inCart - 1});
      axios.post("/removeItem", {
        price: this.props.price
      }).then(response => {
        console.log("Data Sent Successfully.");
      }).catch((error) => {
        console.log("Error while adding item.");
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}: ${this.props.price}, In cart: {this.state.inCart}</h1>
        <button onClick={this.handleAddItem}>Add 1 to cart</button>
        <button onClick={this.handleRemoveItem}>Remove 1 from cart</button>
      </div>
    );
  }
}

export default Item;
