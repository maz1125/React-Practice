import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  handleChangeValue(e) {
    e.preventDefault();
    this.props.onChange(e.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="place-input"
          type="text"
          value={this.props.place}
          onChange={(e) => {
              e.preventDefault();
              this.props.onPlaceChange(e.target.value);
            }}
        />
        <input className="button-input" type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ConnectedSearchForm;
