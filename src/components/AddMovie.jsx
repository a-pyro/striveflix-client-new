import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import PreviewModal from './PreviewModal';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Year: '',
      imdbID: '',
      Type: '',
      Poster: '',
      suggestions: [],
    };
    this.myRef = React.createRef();
  }

  getMovieFields = (title, year, imdbid, type, poster) => {
    this.setState({
      ...this.state,
      Title: title,
      Year: year,
      imdbID: imdbid,
      Type: type,
      Poster: poster,
    });
  };

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  postMovie = async () => {
    try {
      const toSend = { ...this.state };
      delete toSend.suggestions;
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/media`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toSend),
      });
      const body = await resp.json();
      this.setState({ suggestions: body });
      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    this.postMovie();
    this.myRef.current.click();
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <h4>Add Movie</h4>
          <Form.Group>
            <Form.Control
              value={this.state.Title}
              name='Title'
              type='text'
              placeholder='Enter title'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={this.state.Year}
              name='Year'
              type='text'
              placeholder='Enter Year'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={this.state.imdbID}
              name='imdbID'
              type='text'
              placeholder='Enter imdbID'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={this.state.Type}
              name='Type'
              type='text'
              placeholder='Enter Type'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={this.state.Poster}
              name='Poster'
              type='text'
              placeholder='Enter Poster'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <PreviewModal
          getMovieFields={this.getMovieFields}
          suggestions={this.state.suggestions}
        >
          <span ref={this.myRef}></span>
        </PreviewModal>
      </>
    );
  }
}
