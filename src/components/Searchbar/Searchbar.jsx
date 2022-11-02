import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    queryImg: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.queryImg.trim() === '') {
      alert('Введите имя img!');
      return;
    }

    this.props.onSubmit(this.state.queryImg);
    this.setState({ queryImg: '' });
  };

  handleChange = e => {
    this.setState({ queryImg: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            onChange={this.handleChange}
            value={this.state.queryImg}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
