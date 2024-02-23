import { Audio } from 'react-loader-spinner';

import style from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, isLoading }) => {
    return (
        <>
            {isLoading ?
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                /> : (
                    <ul className={style.ImageGallery}>
                        {images.map(({ id, webformatURL }) => <ImageGalleryItem key={id} webformatURL={webformatURL} />)}
                    </ul>
                )
            }
        </>
    )
}