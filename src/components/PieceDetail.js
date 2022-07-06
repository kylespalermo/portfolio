import React, {Component} from 'react';
import DOMPurify from 'dompurify';
import DetailModal from './DetailModal';


class PieceDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          activePhoto: "",
        }
        this.pieceDetail = React.createRef(null);
        this.lastImage = React.createRef(null);
        this.updateHeight = this.props.updateHeight;
        this.toggleOpen = this.toggleOpen.bind(this);
        this.setActivePhoto = this.setActivePhoto.bind(this);
      }

      handleClick(id){
          this.toggleOpen();
          this.setActivePhoto(id);
      }

      
      toggleOpen(){
        this.setState(prevState => ({
          isOpen: !prevState.isOpen,
          })
        )
        document.body.classList.toggle("no-scroll")
      }

      setActivePhoto(id) {
        this.setState({ activePhoto : id }) 
      }

      componentDidMount(){
        this.updateHeight(this.pieceDetail.current.scrollHeight);
        window.addEventListener("resize", () => {
            this.updateHeight(this.pieceDetail.current.scrollHeight)
        })
        this.lastImage.current.addEventListener("load", () => {
          this.updateHeight(this.pieceDetail.current.scrollHeight)
        })
      }

    render() {
        const photos = this.props.photos;
        var cleanDetailText = DOMPurify.sanitize(this.props.pieceDetailText);
        const indexOfActivePhoto = photos.findIndex(photo => photo.id === this.activePhoto);

        return (
        <div ref={this.pieceDetail} className="detail-grid">
            {photos.map((photo, index, og) => <img className="detail-img" key={photo.id} src={photo.url} alt={photo.imageMainAlt} ref={(index === og.length-1) ? this.lastImage : undefined} onClick={() => this.handleClick(photo)}/>)}
            {this.state.isOpen === true &&
            <DetailModal>
              <div className="modal-background" onClick={this.toggleOpen}>
                <img alt={this.state.activePhoto.imageMainAlt} className="modal-image" src={this.state.activePhoto.url}/>
              </div>
            </DetailModal>
            }
            <div dangerouslySetInnerHTML={{__html:cleanDetailText}}/>
        </div>
        );
      }
    }


export default PieceDetail; 