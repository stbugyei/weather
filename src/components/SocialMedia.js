import React from 'react'
import Twitter from "./images/twitter.png";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github (1).png";
import Pinterest from "./images/pinterest.png";


function SocialMedia() {
  return (
    <div className="icon_group">
      <div className="media_icons">
        <div className="twitter">
          <a href="https://twitter.com/login">
            <img
              className="media-image"
              src={Twitter}
              alt=" "
            />
          </a>
        </div>
      </div>
      <div className="media_icons">
        <div className="facebook">
          <a href="https://en-gb.facebook.com/login/">
            <img
              className="media-image"
              src={Facebook}
              alt=" "
            />
          </a>
        </div>
      </div>
      <div className="media_icons">
        <div className="linkedin">
          <a href="https://www.linkedin.com/">
            <img
              className="media-image"
              src={Linkedin}
              alt=" "
            />
          </a>
        </div>
      </div>
      <div className="media_icons">
        <div className="github">
          <a href="https://github.com/join">
            <img
              className="media-image"
              src={Github}
              alt=" "
            />
          </a>
        </div>
      </div>
      <div className="media_icons">
        <div className="pinterest">
          <a href="https://www.pinterest.com/">
            <img
              className="media-image"
              src={Pinterest}
              alt=" "
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia

