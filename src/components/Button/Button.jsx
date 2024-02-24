import style from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={style.Button} onClick={onClick}>
      Load more
    </button>
  );
};
