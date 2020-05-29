import React, {Component} from "react";
import axios from "axios";

class Multiplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false
    };
  }

render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.addMultiplier}>Apply {this.props.name}</button>
        <button onClick={this.removeMultiplier}>Undo {this.props.name}</button>
      </div>
    );
  }
}

export default Multiplier;
