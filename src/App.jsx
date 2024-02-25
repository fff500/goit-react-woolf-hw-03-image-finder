import { Component } from 'react';
import { Audio } from 'react-loader-spinner';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { getImages } from 'helpers/api';

import style from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 0,
    isLoading: false,
    searchQuery: '',
    totalImages: 0,
  };

  hendleSearch = async query => {
    this.setState({
      images: [],
      page: 1,
      isLoading: false,
      searchQuery: query,
      totalImages: 0,
    });
  };

  handleLoadMore = async () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
  };

  async componentDidUpdate(_, state) {
    if (this.state.page !== state.page || this.state.searchQuery !== state.searchQuery) {

      this.setState({ isLoading: true });

      try {
        const {
          data: { hits, totalHits },
        } = await getImages(this.state.searchQuery, this.state.page);

        const newImages = hits.map(({ id, webformatURL, largeImageURL }) => {
          return { id, webformatURL, largeImageURL };
        });

        this.setState(state => ({
          images: [...state.images, ...newImages],
          totalImages: totalHits,
        }));

      } catch (error) {
        alert(error.response?.data || 'Something went wrong!');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { isLoading, page, images, totalImages } = this.state;

    const showLoadMore = !isLoading && !!page && images.length < totalImages;

    return (
      <div className={style.App}>
        <SearchBar onSubmit={this.hendleSearch} />
        <ImageGallery images={images} />
        {isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        )}
        {showLoadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
}
