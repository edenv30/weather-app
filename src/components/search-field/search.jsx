import React from 'react';
// import Select from 'react-select'
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { connect } from 'react-redux';

import { searchCity } from '../../redux/city/city.actions';

import './search-field.styles.scss';

const items1 = [
  {
      Version: 1,
      Key: "349727",
      Type: "City",
      Rank: 15,
      LocalizedName: "Nueva York",
      Country:
      {
          ID: "US",
          LocalizedName: "Estados Unidos"
      },
      AdministrativeArea:
      {
          ID: "NY",
          LocalizedName: "Nueva York"
      }
  },
  {
      Version: 1,
      Key: "187745",
      Type: "City",
      Rank: 30,
      LocalizedName: "Nueva Delhi",
      Country:
      {
          ID: "IN",
          LocalizedName: "India"
      },
      AdministrativeArea:
      {
          ID: "DL",
          LocalizedName: "Delhi"
      }
  },
  {
      Version: 1,
      Key: "35547",
      Type: "City",
      Rank: 35,
      LocalizedName: "Nueva Iguazú",
      Country:
      {
          ID: "BR",
          LocalizedName: "Brasil"
      },
      AdministrativeArea:
      {
          ID: "RJ",
          LocalizedName: ""
      }
  } 
];

const items2 = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript"
  },
  {
    id: 2,
    name: "Basic"
  },
  {
    id: 3,
    name: "PHP"
  },
  {
    id: 4,
    name: "Java"
  },
];

let items = [];

let items3 = items1.map((city, i) => items[i]={id: i, key:city.Key, name:city.LocalizedName});

let items4 = [ {
  key: 349727,
  name: "Cobol",
},
{
  key: 187745,
  name: "JavaScript"
},
{
  key: 35547,
  name: "Basic"
}];


const SearchField = () => {

  const setCities = async (CITY_NAME) => {
    // let response, data = [];
    // if (CITY_NAME.trim().length > 0) {
    //   response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_NAME}`)
    //   data = await response.json();
    // }
    // console.log(data);
    // let cities = items.map(city => city.LocalizedName);
    items = [];
    console.log('before', items);
    items = items1.map((city, i) => items[i]={id: i, key:city.Key, name:city.LocalizedName});
    // this.setState({cities: arr.map(city => city.LocalizedName)});
    console.log(items);
    
};

  const handleChange = (e) => {
    let searchField = e.target.value;
    console.log(searchField);
    setCities(searchField);
    // this.setState({ searchField: e.target.value })
    // this.setCities(this.state.searchField);
    // this.setCities(this.state.searchField); handleChange={this.handleChange}
  }

  const handleOnSearch = (string, cached) => {
    // onSearch returns the string searched and if
    // the values are cached. If the values are cached
    // "cached" contains the cached values, if not, returns false
    setCities(string);
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
            items={items3}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            />
        </div>
    </div>

    // <Select className="wa-search-bar" placeholder="Search" defaultOptions onInputChange={handleChange} />
    // <input className="form-control form-control-sm ml-3 w-75" 
    //         type="text" placeholder="search" aria-label="Search"
    //         onChange={handleChange} />

  );
}

const mapStateToProps = state => ({
  autoCompleteOptions: state.cities.autoCompleteOptions
});

const mapDispatchToProps = dispatch => ({
  searchCity: city => dispatch(searchCity(city))
});

export default connect(null, mapDispatchToProps)(SearchField);




//city.actions:

// export const fetchCitiesStartAsync = city => {
  //     return async dispatch => {
  //         dispatch(fetchCitiesStart());
  //         try {
  //             let response, data, arr = [];
  //         if (city.trim().length > 0) {
  //           response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
  //           data = await response.json();
  //           arr = await data.map((city, i) => arr[i]={key:city.Key, name:city.LocalizedName});
  //           console.log('fetchCitiesStartAsync', arr);
  //           dispatch(fetchCitiesSuccess(arr));
  //         }
  //         }catch{ 
  //             error => dispatch(fetchCitiesFailure(error));
  //         }
  //     }
  // }