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
      <div>
        <div className = "content-thumb">
          <img className = "content-thumb-img" src={this.props.portfolioItem.thumbnail.url} onClick={() => this.getDetail()} />
        </div>  
        <div className = "content-text">
          <p className = "content-title">{this.props.portfolioItem.title}</p>
          <p className = "content-caption">{this.props.portfolioItem.caption}</p>
        </div>
        {this.state.isChecked == true &&
          <div className="modal-background">
            <div className = "content-wrapper three">
                {details.map(detail => <Detail key = {detail.toString()} detailImg = {detail} />)}
                  <div className = "exit" onClick={() => this.getDetail()}>X</div>
            </div>
          </div>
        }
      </div>  
    )
  }
}

export default Piece;