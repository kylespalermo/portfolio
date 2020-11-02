import React, { Component } from "react";
import DetailModal from "./DetailModal.js";
let number;
var colVar = 3;

class Detail extends Component {
  constructor(props) {
    super(props);
    if (this.props.detailImg.imageColSpan == 2) {
      number = "threeColImg"
    } else if (this.props.detailImg.imageColSpan == 1) {

      console.log(colVar);
      if (colVar % 3 == 0) {
        number = "twoColImg";
      } else {
        number = "oneColImg";
      }
      colVar++;
    }

    this.state = {
      modalImgStyle: number,
      detailChecked: false,
    }
  }


  detailView() {
    this.setState(prevState => ({ detailChecked: !prevState.detailChecked }));
    if (this.state.detailChecked == false) {
      document.documentElement.style.setProperty('--dontScrollDetail-Height', "100vh");
      document.documentElement.style.setProperty('--dontScrollDetail-Overflow', "hidden");
    } else {
      document.documentElement.style.setProperty('--dontScrollDetail-Height', "auto");
      document.documentElement.style.setProperty('--dontScrollDetail-Overflow', "auto");
    }
  }

  render() {

    const modalImgStyle = this.state.modalImgStyle;

    return (
      <div className={modalImgStyle}>
        <img src={this.props.detailImg.url} onClick={() => this.detailView()} />
        {this.state.detailChecked == true &&
          <DetailModal>
            <div className="detail-modal-background" onClick={() => this.detailView()}>
              <div className="singleImgDetail">
                <img src={this.props.detailImg.url} />
              </div>
            </div>

          </DetailModal>
        }
      </div>
    )
  }
}

export default Detail;
