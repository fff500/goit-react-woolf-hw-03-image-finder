import style from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
    const handleChange = (event) => {
        onSubmit(event.target.value);
    }

    return (
        <header className={style.Searchbar}>
            <form className={style.SearchForm}>
                <button type="submit" className={style.SearchFormButton}>
                    <span className={style.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={style.SearchFormInput}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}
