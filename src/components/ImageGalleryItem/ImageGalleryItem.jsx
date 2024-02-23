import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({id, webformatURL}) => {
    return (
        <li className={style.ImageGalleryItem} id={id} >
            <img src={webformatURL} alt="Image" />
        </li>
    )
}