import React, { Component } from "react";
import ReactDOM from "react-dom";

class Gallery extends Component {
  state = {
    allImgs: '',
    currentImg: '',
    currentIndex: 0
  };

  componentWillMount() {
    const allImgs = [
      'https://images.craigslist.org/01010_kZAVxzp4NxX_600x450.jpg',
      'https://images.craigslist.org/00r0r_hyjXS7108x1_600x450.jpg',
      'https://images.craigslist.org/00707_j5aytIWMszK_50x50c.jpg',
      'https://images.craigslist.org/01717_d8ojzDPTVw0_50x50c.jpg',
      'https://images.craigslist.org/00S0S_5FAkss8IxDF_50x50c.jpg',
      'https://images.craigslist.org/00p0p_lGXzOareImK_50x50c.jpg'
    ];
    this.setState({allImgs, currentImg: allImgs[this.state.currentIndex]});
  }

  allImgsLooped = () => {
    return this.state.allImgs.map((item, index) => {
      return (
        <div
            key={index}
            className="thumb-img"
            onClick={() => this.clickedThumbnailHandler(index)}
            style={{
              backgroundImage:
                `url('${item}')`
            }}
        ></div>
      );
    });
  }

  nextBtn = () => {
    if(this.state.currentIndex != (this.state.allImgs.length - 1)) {
      this.setState({currentIndex: this.state.currentIndex + 1});
    }
  }

  prevBtn = () => {
    if(this.state.currentIndex != 0) {
      this.setState({currentIndex: this.state.currentIndex - 1});
    }
  }

  clickedThumbnailHandler = (index) => {
    this.setState({currentIndex: index});
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow" onClick={this.prevBtn}><i className="fa fa-chevron-left"></i></div>
            <div className="arrows right-arrow" onClick={this.nextBtn}><i className="fa fa-chevron-right"></i></div>
            <div
              className="image-1"
              style={{
                backgroundImage:
                  `url('${this.state.allImgs[this.state.currentIndex]}')`
              }}
            />
          </div>
        </div>
        <div className="thumbnails">
              {this.allImgsLooped()}
        </div>
      </div>
    );
  }
}

export default Gallery;
