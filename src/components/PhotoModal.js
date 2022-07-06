import React, {Component} from 'react';

class PhotoModal extends Component {
    render() {
        const photos = this.props.photos;
        const activePhoto = this.props.activePhoto;
        const indexOfActivePhoto = photos.findIndex(photo => photo.id == activePhoto);
        return (
        <div className="modal-background" onClick={this.props.closeModal}>
            <img className="modal-image" src={photos[indexOfActivePhoto].url}/>
        </div>
        );
      }
    }


export default PhotoModal; 