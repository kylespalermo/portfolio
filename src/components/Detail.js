import React, {Component} from "react";

class Detail extends Component {

  render(){
    return(
        <div className="detail-img-container">
          <img src={this.props.detailImg.url}/>
        </div>
      )
    }
  }
   
export default Detail;
