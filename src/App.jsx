import { Component } from 'react';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { getImages } from 'helpers/api';

import style from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchIsDone: false,
    searchQuery: '',
    totalImages: 0,
    isLoding: false
  }

  setIsLoading = () => {
    this.setState({ isLoading: true });
  }

  hendleSearch = (query, images, totalHits) => {
    this.setState({
      images,
      page: 1,
      searchIsDone: true,
      searchQuery: query,
      totalImages: totalHits,
      isLoading: false,
    });
  }

  handleLoadMore = async () => {
    const { data: { hits } } = await getImages(this.state.searchQuery, this.state.page + 1);

    this.setState((state) => ({
      images: [...state.images, ...hits],
      page: state.page + 1,
    }));
  }

  render() {
    const showLoadMore = this.state.searchIsDone && (this.state.images.length < this.state.totalImages);

    return (
      <div className={style.App}>
        <SearchBar onSubmit={this.hendleSearch} setIsLoading={this.setIsLoading} />
        <ImageGallery images={this.state.images} isLoading={this.state.isLoading} />
        {showLoadMore && <Button onClick={this.handleLoadMore} />}
      </div>
    );
  }
};
