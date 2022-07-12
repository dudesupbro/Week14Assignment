import React from 'react';
import '../styles/review.css';

export default class Review extends React.Component {
    render() {
        return (
            <div className='card' id='review'>
                <div className='card-body' id='review'>
                    <h4 className='card-title'>{this.props.reviewer}</h4>
                    <p className='card-text'>
                        {this.props.review.text} <br/>
                        {this.props.review.rated} <br/>
                    </p>
                </div>
            </div>
        );
    }
}