import React, {Component} from 'react';
import Detail from "./Detail.js";
import DetailModal from "./DetailModal.js";

class Piece extends Component {
 
  constructor(props) {
    super(props);
    this.state = { isChecked: false
    }
  }

  getDetail() {
    

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
    let scrollPos = document.querySelector('html').scrollTop;
    if (this.state.isChecked == true) {
    window.scrollTo(0, scrollPos); } else {
      window.scrollTo(0, 0);
    }

    if (this.state.isChecked == false) {
      document.documentElement.style.setProperty('--dontScrollBody-Height', "100vh");
      document.documentElement.style.setProperty('--dontScrollBody-Overflow', "hidden");
      } else {
        document.documentElement.style.setProperty('--dontScrollBody-Height', "auto"); 
        document.documentElement.style.setProperty('--dontScrollBody-Overflow', "auto"); 
      }

  }

  render() {

    const details = this.props.portfolioItem.imagesMain;
    // var detailImgsCount = 0;
    
    return (
      <div>
        <div className = "content-thumb"style={{backgroundImage: "url(" + this.props.portfolioItem.thumbnail.url + ")"}} onClick={() => this.getDetail()} />
        <div className = "content-text">
          <p className = "content-title">{this.props.portfolioItem.title}</p>
          <p className = "content-caption">{this.props.portfolioItem.caption}</p>
        </div>
        {this.state.isChecked == true &&
        <DetailModal>
          <div className="multi-modal-background">
            <div className = "content-wrapper three">
              <div className = "detailText">
                <p class = "content-title">{this.props.portfolioItem.title}</p>
                <p dangerouslySetInnerHTML={{__html: this.props.portfolioItem.pieceDetailText.html}}/>

              </div>
                {details.map(detail => <Detail key = {detail.toString()} detailImg = {detail} />)}
                {/* {detailImgsCount = details.length}
                {console.log(detailImgsCount)} */}
                {/* <Detail detailImgsCountFromParent = {detailImgsCount}/> */}

                  <div className = "exit" onClick={() => this.getDetail()}>X</div>
            </div>
          </div>
                  </DetailModal>

        }
      </div>  
    )
  }
}

export default Piece;