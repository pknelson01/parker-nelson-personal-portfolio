import React, { Component } from 'react';
import memojiComputer from '../../../static/assets/images/about-image/memoji.png';
import memojiHey from '../../../static/assets/images/about-image/memoji-blue.png'

export default class About extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img src={memojiHey}></img>
          </div>
          <div className="bio">
            <h3>Hello there! <br /> <br />I am a Passionate Full-Stack Web Developer out of Utah. Currently, I am a student at Bottega University and planning to attend UVU in the spring to work towards a bachelors in Software Engineering. I work very well in teams due to my experience playing college Basketball at Bethany University. I am also comfortable with leadership but still remain very coachable.</h3>
          </div>
        </div>
      </div>
    );
  }
};