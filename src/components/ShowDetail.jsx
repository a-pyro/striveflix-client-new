import React, { Component } from 'react';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import Reviews from './Reviews';

export default class ShowDetail extends Component {
  state = {
    movie: null,
    reviews: [],
    isLoading: true,
    isError: false,
    errorMsg: '',
  };
  fetchSingleMovie = async (id) => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;
      const resp = await fetch(`${apiURL}/media/${id}`);
      const data = await resp.json();
      this.setState({ movie: data.movie });
      this.fetchReviews(data.movie.imdbID);
    } catch (error) {
      console.log(error);
    }
  };

  fetchReviews = async (id) => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;

      const resp = await fetch(`${apiURL}/reviews/${id}`);
      if (resp.ok) {
        const body = await resp.json();
        const reviews = body.movieReviews;
        // console.log(movies);

        this.setState({ reviews });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchSingleMovie(this.props.match.params.id);
  };

  render() {
    return (
      <>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={6}>
              <h1 className='text-white'>{this.state.movie?.Title}</h1>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant='top' src={this.state.movie?.Poster} />
                <Card.Body>
                  <Card.Title>{this.state.movie?.Year}</Card.Title>
                  <Card.Text>
                    <p>{this.state.movie?.imdbID}</p>
                    <p>{this.state.movie?.Type}</p>
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Reviews
                fetchReviews={this.fetchReviews}
                reviews={this.state.reviews}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
