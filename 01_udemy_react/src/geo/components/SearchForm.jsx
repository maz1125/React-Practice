import React, { Component, PropTypes } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'hoge',
    };
  }

  handleChangeValue(value) {
    this.setState({ value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.handleChangeValue(e.target.value)}
        />
        <input type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
