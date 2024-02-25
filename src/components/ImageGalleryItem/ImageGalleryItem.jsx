import { Component } from 'react';

import { Modal } from 'components/Modal/Modal';

import style from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;

    return (
      <>
        <li className={style.ImageGalleryItem} onClick={this.toggleModal}>
          <img src={webformatURL} alt="Image" />
        </li>
        {this.state.showModal && (
          <Modal largeImageURL={largeImageURL} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}
