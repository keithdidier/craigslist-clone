import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe",
      categoriesData: ''
    };
  }

  componentWillMount() {
   
  }

  componentDidMount() {
      const {match, history} = this.props;
      if(match.params.city == undefined) {
          history.push('/nyc');
      }

      axios.get(`/api/${match.params.city}`).then(res => {  
        this.setState({
            categoriesData: res.data
        });
        console.log(this.state);       
    })
    .catch(error => {
        console.log(error);
    });
  }

  clickedBtn = () => {
    console.log("swag");
  };

  mappedCategoriesData = () => {
    const {match, history} = this.props;
    if(this.state.categoriesData != '') {
        return this.state.categoriesData.map((category, index) => {
            const mappedListings = () => {
                return category.listings.map((listing, index) => {
                    return (
                        <a href={`${category.title}/${listing.slug}`} className="link" key={index}>{listing.name}</a>
                    );
                });
            }
            return (
                <div key={index} className="categories">
                    <a href={`/${match.params.city}/${category.title}`} className="title">{category.title}</a>
                    <div className={`group-links ${category.title == 'housing' ? 'single-col' : ''}`}>
                        {mappedListings()}
                    </div>  
                </div>
            ); 
        }); 
    }
  
           
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
                    {this.mappedCategoriesData()}                                                                             
                </section>
                <section className="trending">
                    <input type="text" name="search" className="search" placeholder="Search" />
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
