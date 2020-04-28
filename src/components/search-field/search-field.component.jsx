import React from 'react';
import { createStructuredSelector } from 'reselect';

import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { connect } from 'react-redux';

import { fetchCitiesStartAsync, searchCity } from '../../redux/city/city.actions';
import { selectAutocompleteCities } from '../../redux/city/city.selectors';

import './search-field.styles.scss';

const SearchField = ({ autocompleteCities, fetchCitiesStartAsync }) => {

  const handleOnSearch = (string, cached) => {
    // onSearch returns the string searched and if
    // the values are cached. If the values are cached
    // "cached" contains the cached values, if not, returns false
    fetchCitiesStartAsync(string);
    console.log('handleOnSearch: ',string, cached);
  }

  const handleOnSelect = item => {
    // the item selected
    console.log('handleOnSelect: ',item);
  }

  const handleOnFocus = () => {
    console.log("Focused");
  }


  return (
    <div>
        <div className='autocomplete'>
          <ReactSearchAutocomplete
            items={autocompleteCities}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            />
        </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  autocompleteCities: selectAutocompleteCities
})

// const mapStateToProps = state => ({
//   autocompleteCities: state.city.autocompleteCities
// });

const mapDispatchToProps = dispatch => ({
  fetchCitiesStartAsync: city => dispatch(fetchCitiesStartAsync(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);