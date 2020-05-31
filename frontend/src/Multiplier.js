import React, {Component} from "react";
import axios from "axios";

class Multiplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applied: false
    };
  }

  addMultiplier = () => {
    if (!this.state.applied) {
      this.setState({
        applied: true
      });
      axios.post("/addMultiplier", {
        multiplier: this.props.multiplier,
        type: this.props.name
      }).then(response => {
        console.log(this.props.multiplier);
      }).catch((error) => {
        console.log("Error while adding item.");
      });
    }
  };

  removeMultiplier = () => {
    if (this.state.applied) {
      this.setState({
        applied: false
      });
      axios.post("/removeMultiplier", {
        multiplier: "1",
        type: this.props.name
      }).then(response => {
        console.log("1");
      }).catch((error) => {
        console.log("Error while adding item.");
      });
    }
  };

render() {
    if (this.state.applied) {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.name} is applied ✔️</h5>
            <button onClick={this.addMultiplier} className="btn btn-dark">Apply {this.props.name}</button>
            <button onClick={this.removeMultiplier} className="btn btn-dark">Undo {this.props.name}</button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.name} is not applied ❌</h5>
            <button onClick={this.addMultiplier} className="btn btn-dark">Apply {this.props.name}</button>
            <button onClick={this.removeMultiplier} className="btn btn-dark">Undo {this.props.name}</button>
          </div>
        </div>
      );
    }
  }
}

export default Multiplier;
