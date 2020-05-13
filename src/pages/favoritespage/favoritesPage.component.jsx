import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFavoritesList } from '../../redux/favorites/favorites.selectors';

import CardFavorites from '../../components/card-favorites/card-favorites.component';

import './favoritespage.styles.scss';

const FavoritesPage = ({ favoritesList }) => (
    <div>
    
        <h1>Favorites Page</h1>
        <div>
                {
                    (favoritesList) ?
                    (
                        <div>
                            <div className='favorites-directory'>
                                {favoritesList.map(city => (
                                    <CardFavorites key={city.id} city={city} />
                                ))}
                            </div>
                        </div>
                    )
                    :
                    (
                    <div>
                        <h2>No Favorites</h2>
                    </div>
                    )
                        
                } 
                </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    favoritesList: selectFavoritesList
})

export default connect(mapStateToProps)(FavoritesPage);