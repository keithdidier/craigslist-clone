import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }

  componentWillMount() {
    axios.get('/api/categories').then(res => {
        console.log(res);        
    })
    .catch(error => {
        console.log(error);
    });
  }

  clickedBtn = () => {
    console.log("swag");
  };

  categoriesLooped = () => {
      let testArray = [1,2,3,4,5,6,7];
      return testArray.map((item, index) => {
        return (
            <div key={index} className="categories">
                <div className="title">Community</div>
                <div className="group-links">
                    <a href="#" className="link">Community</a>
                    <a href="#" className="link">General</a>
                    <a href="#" className="link">Activities</a>
                    <a href="#" className="link">Groups</a>                
                    <a href="#" className="link">Artists</a>                                                                
                    <a href="#" className="link">Local News</a>
                    <a href="#" className="link">Child Care</a>
                    <a href="#" className="link">Lost & Found</a>
                    <a href="#" className="link">Classes</a>
                    <a href="#" className="link">Musicians</a>
                    <a href="#" className="link">Events</a>                
                    <a href="#" className="link">Pets</a>
                </div>  
            </div>
        );
      });
  }

  tagsLooped = () => {
      let testTags = ["a","b","c","d","e","f","g"];
      return testTags.map((item, index) => <div key={index} className="tag">Apple MacBook</div>);
  }

  render() {
    return (
        <div className="home">
            <div className="container">
                <h1>Connecting People <br />Everywhere</h1>
                <section className="links">
                    {this.categoriesLooped()}                                                                             
                </section>
                <section className="trending">
                    <input type="text" name="search" className="search" />
                    <div className="title"><i className="fas fa-clock"></i> Trending Now</div>
                    <div className="trending-tags">
                        {this.tagsLooped()}
                    </div>
                </section>
            </div>
        </div>
    );
  }
}

export default Home;
