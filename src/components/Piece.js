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

    if (this.state.isChecked === false) {
      scrollPos = document.querySelector('html').scrollTop;
    }

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    if (this.state.isChecked === true) {
      window.scrollTo(0, scrollPos);
    } else {
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