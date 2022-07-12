import React from 'react';
import Review from './review';
import ReviewForm from './reviewForm';

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    addReview = (newReview) => {
        this.setState((state) => ({reviews: this.state.reviews.concat([newReview]) }));
    };

    render() {
        return (
            <div className='container'>
                {this.props.reviews.map((review, index) => (
                    <Review review={review} key={index} />
                ))}
                {this.state.reviews.map((review, index) => (
                    <Review review={review} key={index} />
                ))}
                <ReviewForm onSubmit={this.addReview} />
            </div>
        );
    }
}