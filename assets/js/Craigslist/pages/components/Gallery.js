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
            style={{
              backgroundImage:
                `url('${item}')`
            }}
        ></div>
      );
    });
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image">
            <div className="arrows left-arrow">{"<"}</div>
            <div className="arrows right-arrow">{">"}</div>
            <div
              className="image-1"
              style={{
                backgroundImage:
                  `url('${this.state.currentImg}')`
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
