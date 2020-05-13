import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isExistIN, addToFavorites, removeFromFavorites } from '../../redux/favorites/favorites.actions';

import { selectIsExist } from '../../redux/favorites/favorites.selectors';
import { selectCity } from '../../redux/city/city.selectors';
import { selectDailyForecastsDegreeMaximum, selectDailyForecastsIconPharse } from '../../redux/forecast/forecast.selectors';

import { convertFerToCel } from '../../redux/utils';

import { ReactComponent as EmptyLogo } from '../../assests/favorite.svg';
import { ReactComponent as FullLogo } from '../../assests/star.svg';

import './favorite-logo-directory.styles.scss';

class FavoriteLogoDirectory extends React.Component{

    setDegreeAndTextDegreeInCity = (city, degree, textDegree) => {
        city.degree = convertFerToCel(degree);
        city.textDegree = textDegree;
    }

    render() {
        const { city, degree, textDegree, isExistIN, isExist, addToFavorites, removeFromFavorites } = this.props;
        // console.log('degtee + textDegree:  ', degree, textDegree);
        if(degree && textDegree) {
            this.setDegreeAndTextDegreeInCity(city, degree, textDegree);
        }
        isExistIN(city);
        return (
            <div>
            {
                (isExist) ?
                (
                    <div className='logo-container1'>
                        <span>
                            <FullLogo className='logo1' onClick={() => removeFromFavorites(city)} />
                        </span>
                        <div className='text-logo1'>
                            <p>Remove from favorites</p>
                        </div>
                    </div>
                ) :
                (
                    <div className='logo-container1'>
                        <span>
                            <EmptyLogo className='logo1' onClick={() => addToFavorites(city)} />
                        </span>
                        <div className='text-logo1'>
                            <p>Add to favorites</p>
                        </div>
                    </div>
                )
            }
        </div>
        );
    }


}
 
const mapDispatchToProps = dispatch => ({
    addToFavorites: city => dispatch(addToFavorites(city)),
    removeFromFavorites: city => dispatch(removeFromFavorites(city)),
    isExistIN: city => dispatch(isExistIN(city))
});

const mapStateToProps = createStructuredSelector({
    city: selectCity,
    isExist: selectIsExist,
    degree: selectDailyForecastsDegreeMaximum,
    textDegree: selectDailyForecastsIconPharse
});

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteLogoDirectory);

// const FavoriteLogoDirectory = ({ isExist, isExistIN, city, addToFavorites, removeFromFavorites, degree, textDegree }) => (
//     <div>
//     {console.log('isExistIN ', isExistIN(city))}
//     {city.degree = convertFerToCel(degree)}
//     {city.textDegree = textDegree}
//         {
//             (isExist) ?
//             (
//                 <div className='logo-container1'>
//                     <span>
//                         <FullLogo className='logo1' onClick={() => removeFromFavorites(city)} />
//                     </span>
//                     <div className='text-logo1'>
//                         <p>Remove from favorite</p>
//                     </div>
//                 </div>
//             ) :
//             (
//                 <div className='logo-container1'>
//                     <span>
//                         <EmptyLogo className='logo1' onClick={() => addToFavorites(city)} />
//                     </span>
//                     <div className='text-logo1'>
//                         <p>Add to favorite</p>
//                     </div>
//                 </div>
//             )
//         }
//     </div>
// );

// const mapDispatchToProps = dispatch => ({
//     addToFavorites: city => dispatch(addToFavorites(city)),
//     removeFromFavorites: city => dispatch(removeFromFavorites(city)),
//     isExistIN: city => dispatch(isExistIN(city))
// });

// const mapStateToProps = createStructuredSelector({
//     city: selectCity,
//     isExist: selectIsExist,
//     degree: selectDailyForecastsDegreeMaximum,
//     textDegree: selectDailyForecastsIconPharse
// });

// export default connect(mapStateToProps,mapDispatchToProps)(FavoriteLogoDirectory);