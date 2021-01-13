import React, {Component} from 'react';
import DetailModal from "./DetailModal.js";

var scrollPos;

class AboutMe extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  getAboutMe() {

    if (this.state.isChecked === false) {
      scrollPos = document.querySelector('html').scrollTop;
    }

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));    
    if (this.state.isChecked === true) {
      window.scrollTo(0, scrollPos); } else {
      window.scrollTo(0, 0);
    }

    if (this.state.isChecked === false) {
      document.documentElement.style.setProperty('--dontScrollBody-Height', "100vh");
      document.documentElement.style.setProperty('--dontScrollBody-Overflow', "hidden");
      } else {
        document.documentElement.style.setProperty('--dontScrollBody-Height', "auto"); 
        document.documentElement.style.setProperty('--dontScrollBody-Overflow', "auto"); 
      }
  }

  render() {    
    
    return (
      <div>
        <span onClick={() => this.getAboutMe()}><u>About Me</u></span>
        {this.state.isChecked === true &&
          <DetailModal>
              <div className="multi-modal-background"  id = "refRect">
                  <div className = "fixedText" >
                    <div className = "detailText">
                      <p className = "content-title">{this.props.aboutMeTextGet.title}</p>
                      <p dangerouslySetInnerHTML={{__html: this.props.aboutMeTextGet.sideText.html}}/>
                      <img src = {this.props.aboutMeTextGet.photos.url} />
                    </div>
                  </div>
                  <div className = "content-wrapper three">
                    <div className = "threeColText">
                        <p dangerouslySetInnerHTML={{__html: this.props.aboutMeTextGet.mainText.html}}/>
                    </div>
                  </div>
              </div>
              <div className = "exit" onClick={() => this.getAboutMe()}>X</div>
          </DetailModal>
        }
      </div>  
    )
  }
}

export default AboutMe;