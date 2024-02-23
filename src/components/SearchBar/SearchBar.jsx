import style from './SearchBar.module.css';

import { getImages } from 'helpers/api';

export const SearchBar = ({ page, onSubmit }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data: { hits } } = await getImages(event.target.elements[1].value, page);

        const newImages = hits.map(({id, webformatURL, largeImageURL}) => {
            return {id, webformatURL, largeImageURL}
        });

        

        onSubmit(newImages);

        console.log(hits);

        //onSubmit(event.target.value);
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
