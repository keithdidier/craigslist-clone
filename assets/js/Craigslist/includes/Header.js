import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      cityDropdown: false,
      selectedCity: 'New York City',
      citiesData: []
    };
  }
  toggleCityDropdown = () => {
    this.setState({cityDropdown: !this.state.cityDropdown});
  };

  componentWillMount() {
    axios.get(`/api/cities`).then(res => {
      const {match, history} = this.props;
      let city = res.data.filter((option) => {
        return option.slug == match.params.city;
      });  
      this.setState({
          citiesData: res.data,
          selectedCity: city[0].title
      });
      // console.log(this.state);       
  })
  .catch(error => {
      console.log(error);
  });
}

selectedCityHandler = (city) => {
  this.setState({
    selectedCity: city
  }, () => {
    let city = this.state.citiesData.filter((option) => {
      return option.title == this.state.selectedCity
    });
    const {match, history} = this.props;
      history.push(`/${city[0].slug}`);
  });
}

loopCities = () => {
  return this.state.citiesData.map((item, index) => {
    return (
      <li key={index} onClick={city => this.selectedCityHandler(item.title)}>{item.title}</li>
    );
  });
}

  render() {
    return (
      <header>
        <div className="left-menu">
            <div className="logo">Craigslist</div>
            <div className="city-dropdown" onClick={this.toggleCityDropdown}>
              {this.state.selectedCity}
              <i className={`fas fa-chevron-down 
                ${this.state.cityDropdown ? 
                'fa-chevron-up' : 'fas fa-chevron-down'}`}>
              </i>
              <div className={`scroll-area ${this.state.cityDropdown ? 'active' : ''}`}>
                <ul>
                  {this.loopCities()}              
                </ul>
              </div>
            </div>            
        </div>
        <div className="right-menu">
            <div className="user-img">Img</div>
            <div className="user-dropdown">My Account <i className="fas fa-chevron-down"></i></div> 
            <div className="post-btn">post to classifieds</div>                                   
        </div>
      </header>
    );
  }
}

export default Header;
