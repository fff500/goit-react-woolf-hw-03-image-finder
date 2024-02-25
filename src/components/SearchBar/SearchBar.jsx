import style from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async event => {
    event.preventDefault();

    onSubmit(event.target.elements[1].value);

    event.target.elements[1].value = '';
  };

  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
};
