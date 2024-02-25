import { Component } from 'react';

import style from './Modal.module.css';

export class Modal extends Component {
  handleEscClick = event => {
    if (event.key !== 'Escape') return;

    this.props.toggleModal();
  }

  handleClick = event => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscClick);
  }

  render() {
    return (
      <div className={style.Overlay} onClick={this.handleClick}>
        <div className={style.Modal}>
          <img src={this.props.largeImageURL} alt="Search result" />
        </div>
      </div>
    );
  }
}
