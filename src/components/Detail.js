import React, {Component} from "react";
let number;

class Detail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.detailImg.imageColSpan) //problem: this is returning undefined. Is it a problem with the query or with how you're calling it? 
    if (this.props.detailImg.imageColSpan == 1 ) {
      number = "oneColImg"
      } else if (this.props.detailImg.imageColSpan == 2 ) {
        number = "twoColImg"
        } else if (this.props.detailImg.imageColSpan == 3 ) {
          number = "threeColImg"
          }
    this.state = {
        modalImgStyle: number,
    }
  }
    
  render(){

    const modalImgStyle = this.state.modalImgStyle;

    return(
        <div className={modalImgStyle}>
          <img src={this.props.detailImg.url} />
        </div>
      )
    }
  }
   
export default Detail;
