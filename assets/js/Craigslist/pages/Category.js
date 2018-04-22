import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import qs from "query-string";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      min_price: 0,
      max_price: 10000,
      sort: "newest",
      select_view: "gallery",
      itemsData: []
    };
  }

  componentWillMount() {
    const { match, history } = this.props;
    const queryParams = qs.parse(this.props.location.search);
    const { min_price, max_price, sort, select_view } = queryParams;

    if (queryParams.min_price != undefined) { 
      axios
      .get(`/api/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`)
      .then(res => {
        this.setState({
          itemsData: res.data
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });    
    }
  }

  itemsLooped = () => {
    return this.state.itemsData.map((item, index) => {
      return (
        <div key={index} className="item">
          <div
            className="image"
            style={{ backgroundImage: `url(${item.images[0]})` }}
          >
            <div className="price">${item.price}</div>
            image
          </div>
          <div className="details">
            <h5>{item.title}</h5>
            <h6>{item.city}</h6>
          </div>
        </div>
      );
    });
  };

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;

    if (match.params.listings == "cars-and-trucks") {
      return (
        <div className="make-model-comp">
          <div className="form-group make">
            <label>Make</label>
            <select name="make" className="make" onChange={this.handleChange}>
              <option value="bmw">BMW</option>
              <option value="honda">Honda</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <div className="form-group model">
            <label>Model</label>
            <select name="model" className="model" onChange={this.handleChange}>
              <option value="bmw">M3</option>
              <option value="accord">Accord</option>
              <option value="Camery">Camery</option>
            </select>
          </div>
        </div>
      );
    }
  };

  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type == "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  submitFilters = () => {
    const { match, location, history } = this.props;
    const { min_price, max_price, sort, select_view } = this.state;
    

    document.location.href = `/${match.params.city}/${match.params.category}?min_price=${min_price}&max_price=${max_price}&sort=${sort}&select_view=${select_view}`;
    const queryParams = qs.parse(this.props.location.search);
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select
                  name="min_price"
                  className="min-price"
                  onChange={this.handleChange}
                  value={this.state.min_price}
                >
                  <option value="0">0</option>
                  <option value="1000">1,000</option>
                  <option value="5000">5,000</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                  <option value="80000">80000</option>
                  <option value="90000">90000</option>
                </select>
                <select
                  name="max_price"
                  className="max-price"
                  onChange={this.handleChange}
                  value={this.state.max_price}
                >
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                  <option value="80000">80000</option>
                  <option value="90000">90000</option>
                  <option value="100000">100000</option>
                </select>
              </div>
            </div>
            {this.showMakeModelDropdown()}
            <div className="form-group button">
              <div className="primary-btn" onClick={this.submitFilters}>
                Update
              </div>
              <div className="reset-btn">Reset</div>
            </div>
          </section>
        </div>

        <section id="list-view">
          <div className="container">
            <div className="white-box">
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select
                    name="select_view"
                    className="select-view"
                    onChange={this.handleChange}
                    value={this.state.select_view}
                  >
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="thumb">Thumb</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select
                    name="sort"
                    className="sort-dropdown"
                    onChange={this.handleChange}
                    value={this.state.sort}
                  >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </section>

              <section className="all-items">{this.itemsLooped()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Category;
