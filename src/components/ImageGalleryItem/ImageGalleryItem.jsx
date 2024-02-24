import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';

import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li
        className={style.ImageGalleryItem}
        id={id}
        onClick={() => setShowModal(true)}
      >
        <img src={webformatURL} alt="Image" />
      </li>
      {showModal && (
        <Modal largeImageURL={largeImageURL} setShowModal={setShowModal} />
      )}
    </>
  );
};
