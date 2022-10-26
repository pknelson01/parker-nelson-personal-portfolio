import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEmpire,
  faGalacticRepublic,
  faLinkedin,
  faSquareTwitter,
  faSquareGithub
} from "@fortawesome/free-brands-svg-icons";

import axios from 'axios';
import React, { Component } from 'react';


/*
*/

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      portfolioItem: {}
    }
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios.get(
      `https://parkernelson.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
      { withCredentials: true }
    ).then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    }).catch(error => {
      console.log("this is the error", error);
    })
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url,
    } = this.state.portfolioItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }

    const logoStyles = {
      width: "200px"
    }

    return (
      <div className="portfolio-detail-wrapper">
        {/* <div className="portfolio-detail-wrapper">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="content-wrapper">
            <div className="image-wrapper">
              <img src={thumb_image_url}></img>
            </div>
            <div className="description">
              <h3>{description}</h3>
            </div>
          </div>
        </div >
        <div className="footer-link">
          <h3>Want to take a look at the code?</h3>
          <a href={url} target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
        </div> */}

        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <div className="site-link">
            <h3>Check out the code!</h3>
            <a href={url} target="_blank">
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </div>
        </div>

      </div>
    );
  }
};