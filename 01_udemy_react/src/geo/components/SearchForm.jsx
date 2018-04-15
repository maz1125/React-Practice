import React, { Component, PropTypes } from 'react';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  handleChangeValue(e) {
    e.preventDefault();
    console.log(this.props.onChange);
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="place-input"
          type="text"
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
        <input className="button-input" type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchForm;
