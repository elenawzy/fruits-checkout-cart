import React, {Component} from "react";
import axios from "axios";

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "0.00"
    };
  }

  handleCalculate = () => {
    axios.get("/calculateTotal").then(response => {
      this.setState({
        total: response.data.totalString
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCalculate} className="btn btn-success btn-lg">Calculate Total</button>
        <h1 className="calculate">Total: ${this.state.total}</h1>
      </div>
    );
  }

}

export default Calculate;
