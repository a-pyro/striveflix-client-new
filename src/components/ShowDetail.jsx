import React, { Component } from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

export default class ShowDetail extends Component {
  state = {
    movie: null,
    comments: [],
    isLoading: true,
    isError: false,
    errorMsg: '',
  };

  componentDidMount = async () => {
    console.log('MOUNTED!');

    const movieID = this.props.match.params.id;
    console.log(movieID);
    // fetch movie
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=95717d44&i=${movieID}`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ movie: data, isLoading: false });
      } else {
        this.setState({ isError: true });
        console.log('theres an error');
      }
    } catch (error) {
      console.log(error);
    }

    //fetch comments
    try {
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/comments/${movieID}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MTcyMDE4NjMsImV4cCI6MTYxODQxMTQ2M30.ru_9O8RdNoCPKpFG-dgtPC8cqI3OozYpyQArNhtE9yg',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: [...data], isLoading: false });
      } else {
        this.setState({ isError: true });
        console.log('theres an error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.comments);
    console.log(this.state.movie);
    return (
      <>
        {/* {this.state.isLoading || this.state.movie === 'null' ? (
          <Spinner animation='grow' />
        ) : (
          <h1>the movie id is {this.state.movie.title}</h1>
        )} */}

        {this.state.movie?.Title ?? ''}
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </>
    );
  }
}
