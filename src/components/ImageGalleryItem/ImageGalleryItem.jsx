import React, { Component } from 'react';
import Modal from 'components/Modal';

import { ImageItem, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformat, alt, largeImage } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ImageItem onClick={this.toggleModal}>
          <Image src={webformat} alt={alt} width="350" loading="lazy" />
        </ImageItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={alt} loading="lazy" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
