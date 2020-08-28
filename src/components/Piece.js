import React, {Component} from 'react';
import Detail from "./Detail.js";

class Piece extends Component {
 
  constructor(props) {
    super(props);
    this.state = { isChecked: false
    }
  }

  getDetail() {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    }

  render() {

    const details = this.props.portfolioItem.imagesMain;
    
    return (
      <div class="image-grid-block">
        <div className = "image-grid-image">
          <img src={this.props.portfolioItem.thumbnail.url} onClick={() => this.getDetail()} />
            {this.state.isChecked == true &&
              <div className="detail-shade"> 
                {details.map(detail => <Detail key = {detail.toString()} detailImg = {detail} />)}
                  <div className = "exit" onClick={() => this.getDetail()}>X</div>
              </div>
            }
        </div>  
        <div className = "image-grid-text">
          <p>{this.props.portfolioItem.title}</p>
          <p>{this.props.portfolioItem.caption}</p>
        </div>
      </div>  
    )
  }
}

export default Piece;