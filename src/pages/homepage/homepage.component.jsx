import React from 'react';

import Directory from '../../components/directory/directory.component';
import SearchField from '../../components/search-field/search-field.component';

import './homepage.styles.scss';



// const countryCode = `IL`;
// const format = `JSON`;
// const apikey = `hPv0X7xUCveAHe9KDSuSATzh9weAOkVK`;  // api key
// const url = `http://dataservice.accuweather.com/locations/v1/cities/${countryCode}/autocomplete{.${format}}?q={location}{&apikey=${apikey}}{&language=en-us}`;
// const API_KEY = 'hPv0X7xUCveAHe9KDSuSATzh9weAOkVK';

const arr = [
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

const HomePage = () => {

    // constructor() {
    //     super();

    //     this.state = {
    //         // placeholder: 'Tel-Aviv',
    //         searchField: '',
    //         cities: []

    //     }
    // }

    // setCities = async (CITY_NAME) => {
    //     // let response, data = [];
    //     // if (CITY_NAME.trim().length > 0) {
    //     //   response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${CITY_NAME}`)
    //     //   data = await response.json();
    //     // }
    //     // console.log(data);
    //     this.setState({cities: arr.map(city => city.LocalizedName)});
    //     console.log(this.state.cities);
        
    // }

    // handleChange = (e) => {
    //     this.setState({ searchField: e.target.value })
    //     this.setCities(this.state.searchField);
    //     // this.setCities(this.state.searchField); handleChange={this.handleChange}
    // }

    return(
            <div className='homepage'>
                <SearchField />
                <Directory  />
            </div>
        )

}

export default HomePage;