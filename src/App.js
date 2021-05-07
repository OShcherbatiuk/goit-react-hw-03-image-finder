import { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from 'react-loader-spinner';
import imgApi from './services/img-api';
import Modal from './components/Modal';

import s from './App.module.css';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    modalImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    imgApi
      .fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImgFocus = e => {
    this.setState({
      modalImageURL: e.target.srcset,
    });
  };

  render() {
    const { hits, isLoading, error, showModal, modalImageURL } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <div className={s.App}>
        {showModal && (
          <Modal largeUrl={modalImageURL} onClose={this.toggleModal} />
        )}
        {error && <h1>try again later</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery
          hits={hits}
          id={hits.id}
          webformatURL={hits.previewURL}
          modalFormatURL={hits.largeImageURL}
          onClick={this.toggleModal}
          onFocus={this.onImgFocus}
        />
        {isLoading && (
          <Loader
            className={s.Loader}
            type="ThreeDots"
            color="#3f51b5"
            height={80}
            width={80}
            timeout={3000}
          />
        )}
        {shouldRenderLoadMoreButton && <Button onBtnClick={this.fetchHits} />}
      </div>
    );
  }
}

export default App;
