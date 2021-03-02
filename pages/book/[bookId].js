import React, { Component } from "react";
import { withRouter } from "next/router";

class SpacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookPrice: 5000,
    };
    console.log(props.router.query)
  }
  componentDidMount() {
    // const { query } = this.props;
    // if (query.bookId) {
    //   this.setState({ bookPrice: 10000 });
    // }
    console.log('didmount', this.props.router.query)
  }

  render() {
    console.log(this.props.router.query)
    return this.state.bookPrice === 5000 ? <p>Why {this.state.bookPrice}</p> : <p>Dont have</p>;
  }
}

export default withRouter(SpacePage);
