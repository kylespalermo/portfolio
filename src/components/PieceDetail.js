import React, {Component} from 'react';
import PhotoModal from './PhotoModal';
import DOMPurify from 'dompurify';


class PieceDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          activePhoto: "",
        }
        this.pieceDetail = React.createRef(null);
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
      }

    render() {
        const photos = this.props.photos;
        var cleanDetailText = DOMPurify.sanitize(this.props.pieceDetailText);

        return (
        <div ref={this.pieceDetail} className="detail-grid">
            {photos.map(photo => <img className="detail-img" key={photo.id} src={photo.url} alt={photo.imageMainAlt} onClick={() => this.handleClick(photo.id)}/>)}
            {this.state.isOpen === true &&
                <PhotoModal key={this.state.activePhoto} photos={photos} activePhoto={this.state.activePhoto} closeModal={this.toggleOpen.bind(this)}></PhotoModal>
            }
            <div dangerouslySetInnerHTML={{__html:cleanDetailText}}/>
        </div>
        );
      }
    }


export default PieceDetail; 