import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
// import components
import Rows from './Rows';

import { v4 as uuidv4 } from 'uuid';
import SingleCard from './SingleCard';
import AddMovie from './AddMovie';

const Home = ({ movies, queriedMovies, title }) => {
  console.log(movies);
  return (
    <Container fluid>
      <h1>{title}</h1>
      <Row>
        <Col xs={4}>
          <AddMovie />
        </Col>
      </Row>
      <Row>
        <Rows movies={movies} />
      </Row>
    </Container>
  );
};

export default Home;
