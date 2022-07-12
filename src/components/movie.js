import React from 'react';
import ReviewList from './reviewList';
import '../styles/movie.css';

export default class Movie extends React.Component {
    render() {
        return (
            <div className='card'>
                <div className='card-title'>
                    <h2>{this.props.movie.name}</h2>                    
                </div>
                <div className='card-text'>
                    <p>{this.props.movie.synopsis}</p>
                </div>
                <div className='card-footer'>
                    <p>Rated: {this.props.movie.rated}</p>
                </div>
                <div className='card'>
                    <h3>Reviews</h3>
                    <ReviewList reviews={this.props.movie.reviews} />                    
                </div>
            </div>
        );
    }
}