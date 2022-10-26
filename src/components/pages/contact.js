import React, { Component } from 'react';
import memojiComputer from '../../../static/assets/images/about-image/memoji.png';
import memojiCallMe from '../../../static/assets/images/about-image/memoji-blue-contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEmpire,
  faGalacticRepublic,
  faLinkedin,
  faSquareTwitter,
  faSquareGithub
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img src={memojiCallMe}></img>
          </div>
          <div className="contact-info">
            <div className="contact-bullet-points">
              <div className="bullet-points">
                <div className="icon">
                  <FontAwesomeIcon icon="square-phone" />
                </div>
                <div className="text">(801) 369 - 8070</div>
              </div>

              <div className="bullet-points">
                <div className="icon">
                  <FontAwesomeIcon icon="square-envelope" />
                </div>
                <div className="text">pk.fullstackdev@gmail.com</div>
              </div>

              <div className="bullet-points">
                <div className="icon">
                  <FontAwesomeIcon icon="map-location-dot" />
                </div>
                <div className="text">Saratoga Springs, Utah</div>
              </div>
            </div>

            <div className="social-links">
              <div className="brand-icon">
                <a href="https://www.linkedin.com/in/parker-nelson-27a819241/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
              <div className="brand-icon">
                <a href="https://twitter.com/parkernelsondev" target="_blank">
                  <FontAwesomeIcon icon={faSquareTwitter} />
                </a>
              </div>
              <div className="brand-icon">
                <a href="https://github.com/pknelson01" target="_blank">
                  <FontAwesomeIcon icon={faSquareGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};