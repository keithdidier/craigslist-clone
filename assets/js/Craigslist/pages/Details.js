import React, { Component } from "react";
import ReactDOM from "react-dom";

import Gallery from './components/Gallery';

class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="#" className="next">
                  prev
                </a>
                <a href="#" className="next">
                  next
                </a>
              </div>
              <nav className="sub-links">
                <a href="#">More Ads By User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>

            <section className="content-area">
              <div className="media-column">
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted: Feb 28th</div>
                <h3 className="title">Black 2016 BMW</h3>
                <h4 className="price">$46,000</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>WDQULGLH8447598</h5>
                  </div>
                  <div className="info">
                    <label>Milieage</label>
                    <h5>5624</h5>
                  </div>
                  <div className="info">
                    <label>Transmision</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>Lorem ipsum dolor amet put a bird on it enamel pin mlkshk, pickled farm-to-table VHS venmo gochujang coloring book keffiyeh cardigan helvetica mumblecore taiyaki. Keytar slow-carb truffaut heirloom vape succulents banjo cold-pressed neutra. Chartreuse pickled you probably haven't heard of them, hella sustainable selvage schlitz biodiesel fam drinking vinegar squid pabst cliche lumbersexual. Vape craft beer copper mug organic direct trade lumbersexual polaroid coloring book vegan tote bag franzen.</p>
                  <p>Hexagon cliche vegan truffaut chartreuse. Mlkshk pug hexagon locavore farm-to-table, swag try-hard tofu vice YOLO green juice. Messenger bag vice swag godard iPhone jean shorts, XOXO sartorial seitan. Yuccie pop-up slow-carb fanny pack kogi fashion axe flannel chicharrones hella biodiesel woke. XOXO disrupt kale chips slow-carb letterpress kombucha vice. Bitters hammock microdosing hot chicken gochujang godard.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
