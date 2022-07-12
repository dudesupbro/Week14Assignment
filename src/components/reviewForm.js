import React from 'react';
import "../styles/form.css";

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewInfo: {
        reviewer: '',
        text: '',
        rated: '',
      },
    };
    {
      this.changeChild = React.createRef();
    }
  }

  onNameChange = (event) => {
    this.setState((state) => {
      const copyOfInfo = { ...state.reviewInfo };
      copyOfInfo.reviewer = event.target.value;
      return { reviewInfo: copyOfInfo };
    });
  };

  onTextChange = (event) => {
    this.setState((state) => {
      const copyOfInfo = { ...state.reviewInfo };
      copyOfInfo.text = event.target.value;
      return { reviewInfo: copyOfInfo };
    });
  };

  addRating = (newRating) => {
    this.setState((state) => {
      const copyOfInfo = { ...state.reviewInfo };
      copyOfInfo.rated = newRating;
      return { reviewInfo: copyOfInfo };
    });
  };

  onUserSubmit = () => {
    const newReview = {
      reviewer: this.state.reviewInfo.reviewer,
      text: this.state.reviewInfo.text,
    };
    this.props.onSubmit(newReview);
    this.setState({ reviewInfo: { reviewer: "", text: "" } });
    // this.changeChild.current.clearStars();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div id="form">
          <h3>Submit a Review</h3>

          <input
            type="text"
            className="form-control"
            placeholder="Reviewer"
            value={this.state.reviewInfo.reviewer}
            onChange={this.onNameChange}
          />
          <textarea
            className="form-control"
            placeholder="Enter review"
            value={this.state.reviewInfo.text}
            onChange={this.onTextChange}
          />
          <br />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onUserSubmit}
          >
            Submit Review
          </button>
        </div>
        <br />
        <br />
      </form>
    );
  }
}