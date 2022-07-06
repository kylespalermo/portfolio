import React, {Component} from 'react';
import PhotoModal from './PhotoModal';


class PhotoGrid extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          activePhoto: "",
        }
        console.log(props)
        this.giveHeight = this.props.giveHeight;
        this.toggleOpen = this.toggleOpen.bind(this);
        this.setActivePhoto = this.setActivePhoto.bind(this);
        this.pieceDetailImages = React.createRef(null);
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
        console.log(this.pieceDetailImages)
        window.addEventListener("resize", this.giveHeight(this.pieceDetailImages))
      }

    render() {
        const photos = this.props.photos;

        return (
        <div ref={this.pieceDetailImages} className="photo-grid">
            {photos.map(photo => <img className="detail-img" key={photo.id} src={photo.url} onClick={() => this.handleClick(photo.id)}/>)}
            {this.state.isOpen === true &&
                <PhotoModal key={this.state.activePhoto} photos={photos} activePhoto={this.state.activePhoto} closeModal={this.toggleOpen.bind(this)}></PhotoModal>
            }
        </div>
        );
      }
    }


export default PhotoGrid; 