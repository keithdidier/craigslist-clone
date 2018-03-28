import React, { Component } from "react";
import ReactDOM from "react-dom";

class Category extends Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    const {match, location, history} = this.props;
    return (
        <div className="category">
            <div className="container">
                This category is {match.params.category}
            </div>
        </div>
    );
  }
}

export default Category;
