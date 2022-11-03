import React, { Component } from 'react';
import { Box } from 'components/Box/Box';

import fetchImages from 'components/api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import ImagesSkeleton from 'components/ImagesSkeleton';
import ErrorMessage from 'components/ErrorMessage';
import IdleMessage from 'components/IdleMessage';
import Button from 'components/Button';

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
    page: 1,
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.queryImg;
    const nextImg = this.state.queryImg;

    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg || prevPage !== nextPage) {
      this.setState({
        status: Status.PENDING,
      });

      try {
        const images = await fetchImages(nextImg, this.state.page);
        this.setState(prevState => ({
          searchedImgs: [...prevState.searchedImgs, ...images],
          status: Status.RESOLVED,
        }));
      } catch (error) {
        this.setState({ error, status: Status.REJECTED });
      }
    }
  }

  handleSubmit = queryImg => {
    this.setState({ queryImg, searchedImgs: [], page: 1 });
  };

  handleMore = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { searchedImgs, status } = this.state;

    return (
      <Box minHeight="100%" display="flex" flexDirection="column">
        <Searchbar onSubmit={this.handleSubmit} />
        <Box pt={4} flex="1 1 auto">
          {status === 'idle' && <IdleMessage />}
          {status === 'pending' && <ImagesSkeleton />}
          {status === 'rejected' && <ErrorMessage />}
          {status === 'resolved' && <ImageGallery images={searchedImgs} />}
        </Box>
        {searchedImgs && status === 'resolved' && (
          <Button onClick={this.handleMore} />
        )}
      </Box>
    );
  }
}

export default App;
