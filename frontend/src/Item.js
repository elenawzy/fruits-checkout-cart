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
      })
      .then(response => {
        console.log("Data Sent Successfully.");
      }).catch((error) => {
        console.log("Error while adding item.");
      });
    }
  };

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgSource} alt={this.props.name}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">${this.props.price} each</p>
          <p className="card-text">
            In cart: <span className="badge badge-dark badge-pill">{this.state.inCart}</span>
          </p>
          <button onClick={this.handleAddItem} className="btn btn-success">Add 1 to cart</button>
          <button onClick={this.handleRemoveItem} className="btn btn-outline-danger">Remove 1 from cart</button>
        </div>
      </div>
    );
  }
}

export default Item;
