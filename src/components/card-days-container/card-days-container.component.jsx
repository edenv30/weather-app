import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import { selectCity } from '../../redux/city/city.selectors';
import { selectFiveDays } from '../../redux/forecast/forecast.selectors';
import { fetchFiveDaysStartAsync } from '../../redux/forecast/forecast.actions';

import CardHome from '../card-home/card-home.component';

import './card-days-container.styles.scss';

class CardDaysContainer extends React.Component {
    
    componentDidMount() {
        const { city, fetchFiveDaysStartAsync } = this.props;
        fetchFiveDaysStartAsync(city.id);
    };

    render() {
        const { fiveDays } = this.props;
        console.log('fiveDays: ',fiveDays);
            return(
                <div>
                {
                    (fiveDays) ?
                    (
                        <div>
                            <h1>{fiveDays.Headline.Text}</h1>
                            <div className='cards-directory'>
                                {fiveDays.DailyForecasts.map((day, id = 0) => (
                                    <CardHome key={"id:" + id++} day={day} />
                                ))}
                            </div>
                        </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        
                    
                }
                    
                </div>
            
            )
        }
};


const mapStateToProps = createStructuredSelector({
    city: selectCity,
    fiveDays: selectFiveDays
});

const mapDispatchToProps = dispatch => ({
    fetchFiveDaysStartAsync: cityId => dispatch(fetchFiveDaysStartAsync(cityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDaysContainer);