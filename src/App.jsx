import { Component } from 'react';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

import style from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    page: 1,
  }

  hendleSearch = (images) => {
    this.setState({
      images,
      page: 1,
    });
  }

  handleLoadMore = () => {

  }

  render() {
    return (
      <div className={style.App}>
        <SearchBar onSubmit={this.hendleSearch} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
};
