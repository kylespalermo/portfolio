import React, { Component } from 'react';
import PieceDetail from './PieceDetail';



class Piece extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      height: 0,
      detailTextHeight: 0,
      detailImgsHeight: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
      })
    )
  }

  updateHeight(pieceDetailHeight) { 
    this.setState({height: pieceDetailHeight})
  }

  render() {
    return (
      <div className="piece">
        <ul className="piece-collapsible">
          <li><button onClick={this.handleClick} className={'piece-button ' + (this.state.isOpen ? 'button-active' : 'button-inactive') }/></li>
          <li>{this.props.itemGet.title}</li>
          <li>{this.props.itemGet.client}</li>
          <li>
            {this.props.itemGet.roles.map(role => <span key={role.id}>{role.replace("_", " ")}</span>)}
          </li>
          <li>
            {this.props.itemGet.technologies.map(technology => <span key={technology.id}>{technology.replace("_", " ")}</span>)}
          </li>
        </ul>
        <div className="piece-detail" ref={ (pieceDetail) => { this.pieceDetail = pieceDetail }} style={{height: this.state.isOpen ? `${this.state.height}px` : `0px`}}>
          <PieceDetail ref={this.pieceDetailImages} photos={this.props.itemGet.imagesMain} updateHeight={this.updateHeight.bind(this)} pieceDetailText={this.props.itemGet.pieceDetailText.html}></PieceDetail>
        </div>
      </div>
    )
  }
}

export default Piece;