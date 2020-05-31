import React, {Component} from "react";
import axios from "axios";

class Refresh extends Component {
  constructor(props) {
    super(props);
  }

  handleRefresh = () => {
    axios.post("/refresh", {
      refresh: true
    }).then(response => {
      console.log(response.data.total);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRefresh} className="btn btn-info btn-lg">Start a new session!</button>
      </div>
    );
  }

}

export default Refresh;
