import React, { Component } from 'react';

import fetchImages from 'components/api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImagesSkeleton from 'components/ImagesSkeleton';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    queryImg: '',
    searchedImgs: null,
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.queryImg;
    const nextImg = this.state.queryImg;

    if (prevImg !== nextImg) {
      this.setState({ queryImg: nextImg, status: Status.PENDING });

      try {
        const images = await fetchImages(nextImg);
        this.setState({ searchedImgs: images, status: Status.RESOLVED });
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }
  }

  handleInputImg = queryImg => {
    this.setState({ queryImg });
  };

  render() {
    const { searchedImgs, error, status } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleInputImg} />
        {status === 'idle' && <div>Введите что-то.</div>}
        {status === 'pending' && <ImagesSkeleton />}
        {status === 'rejected' && <h2>{error.message}</h2>}
        {status === 'resolved' && <ImageGallery images={searchedImgs} />}
      </>
    );
  }
}

export default App;
