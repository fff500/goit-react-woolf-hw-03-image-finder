import style from './SearchBar.module.css';

import { getImages } from 'helpers/api';

export const SearchBar = ({ page, onSubmit, setIsLoading }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading();

        const { data: { hits, totalHits } } = await getImages(event.target.elements[1].value, page);

        const newImages = hits.map(({id, webformatURL, largeImageURL}) => {
            return {id, webformatURL, largeImageURL}
        });

        onSubmit(event.target.elements[1].value, newImages, totalHits);
    }

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
                />
            </form>
        </header>
    )
}
