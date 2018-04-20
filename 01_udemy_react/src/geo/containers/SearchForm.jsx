import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPlace, startSearch } from '../actions/';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.startSearch();
  }

  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="place-input"
          type="text"
          value={this.props.place}
          onChange={(e) => {
              e.preventDefault();
              this.props.setPlace(e.target.value);
            }}
        />
        <input className="button-input" type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  startSearch: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  place: state.place,
});

export default connect(mapStateToProps, { setPlace, startSearch })(SearchForm);
