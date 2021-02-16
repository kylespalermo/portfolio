import React, { Component } from 'react';
import Detail from "./Detail.js";
import DetailModal from "./DetailModal.js";
var scrollPos;

class Piece extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  getDetail() {

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    if (this.state.isChecked === false) {
      scrollPos = document.querySelector('html').scrollTop;
      document.documentElement.style.setProperty('--dontScrollBody-Height', "100vh");
      document.documentElement.style.setProperty('--dontScrollBody-Overflow', "hidden");
      window.scrollTo(0, 0);
      // console.log("open")
      //console.log(this.state.isChecked)
    } else {
      document.documentElement.style.setProperty('--dontScrollBody-Height', "auto");
      document.documentElement.style.setProperty('--dontScrollBody-Overflow', "auto");
      //console.log("close");
      //console.log(this.state.isChecked)
      window.scrollTo(0, scrollPos);
    }   
  }

  render() {

    const details = this.props.portfolioItem.imagesMain;

    return (
      <div className="content-item-wrapper">
        <div className="content-thumb" style={{ backgroundImage: "url(" + this.props.portfolioItem.thumbnail.url + ")" }} onClick={() => this.getDetail()} />
        <div className="content-text">
          <p className="content-title">{this.props.portfolioItem.title}</p>
          <p className="content-caption">{this.props.portfolioItem.caption}</p>
        </div>
        {this.state.isChecked === true &&
          <DetailModal>
            <div className="multi-modal-background" id="refRect">
              <div className="fixedText">
                <div className="detailText">
                  <p className="content-title">{this.props.portfolioItem.title}</p>
                  <p dangerouslySetInnerHTML={{ __html: this.props.portfolioItem.pieceDetailText.html }} />
                </div>
              </div>
              <div className="content-wrapper three" id="refRect">
                {details.map(detail => <Detail key={detail.id} detailImg={detail} />)}
              </div>
            </div>
            <div className="exit" onClick={() => this.getDetail()}>X</div>
          </DetailModal>
        }
      </div>
    )
  }
}

export default Piece;