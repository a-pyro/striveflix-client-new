import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import ShowDetail from './components/ShowDetail';
import RegistrationPage from './components/registration/RegistrationPage';

import { Form, Container, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    query: '',
    queriedElement: [],
    movies: [],
    queryNotFound: false,
    queryErrorFromApi: '',
    isLoading: false,
  };
  fetchMovies = async () => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;
      console.log(apiURL);
      const resp = await fetch(`${apiURL}/media`);
      if (resp.ok) {
        const body = await resp.json();
        const movies = body.data;
        // console.log(movies);
        this.setState({ movies: movies });
        // console.log(movies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleInput = (e) => {
    this.setState({
      ...this.state,
      query: e.currentTarget.value,
      queryNotFound: false,
      queryErrorFromApi: '',
      queriedElement: [],
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state.query);
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      const resp = await fetch(
        `http://www.omdbapi.com/?apikey=95717d44&s=${this.state.query
          .toLowerCase()
          .replaceAll(' ', '+')}`
      );
      if (resp.ok) {
        // this api resp always with ok so i have to check data.Response
        // console.log('resp ok');
        const data = await resp.json();
        if (data.Response === 'True') {
          // console.log(data);
          // i have data and change state
          this.setState({
            ...this.state,
            queriedElement: data.Search,
            queryNotFound: false,
            isLoading: false,
          });
          // console.log('queriedElement:', this.state.queriedElement);
        } else {
          // here i got data.Response = False so cange the state to display allert later
          console.log(data.Error);
          this.setState({
            ...this.state,
            queryNotFound: true,
            queryErrorFromApi: data.Error,
            isLoading: false,
          });
        }
      } else {
        console.log('resp not ok:', resp);
      }
    } catch (error) {
      console.log(error);
      this.setState.apply({
        isLoading: false,
      });
    }
  };
  addMovie = async () => {};

  componentDidMount = () => {
    this.fetchMovies();
  };
  // Create a Route for a ShowDetail component. It should be able to receive a ID parameter from the querystring.
  render() {
    return (
      <>
        <Router>
          <Header />
          <Container fluid>
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                onChange={this.handleInput}
                className='my-3 '
                type='text'
                placeholder='Search For Movies and Press Enter'
                value={this.state.query}
              />
            </Form>
            {this.state.queryNotFound && (
              <Alert variant='warning'>{this.state.queryErrorFromApi}</Alert>
            )}
          </Container>

          <Route
            path='/'
            exact
            render={(routerProps) => (
              <Home
                {...routerProps}
                fetchMovies={this.state.fetchMovies}
                title='Homepage'
                movies={this.state.movies}
                queriedMovies={this.state.queriedElement}
              />
            )}
          />

          <Route
            path='/details/:id'
            render={(routerProps) => (
              <ShowDetail {...routerProps} title='Details Page' />
            )}
          />
          <Route path='/registration' component={RegistrationPage} />
          <Footer />
        </Router>
      </>
    );
  }
}
