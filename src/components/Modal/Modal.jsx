import style from './Modal.module.css';

export const Modal = ({ src, title }) => {
    return (
    <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src={src} alt={title} />
        </div>
      </div>
    )
}