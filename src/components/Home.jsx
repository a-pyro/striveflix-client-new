import React from 'react';
import { Row, Container } from 'react-bootstrap';
// import components
import Rows from './Rows';
import { v4 as uuidv4 } from 'uuid';
import SingleCard from './SingleCard';

const Home = ({ movies, queriedMovies, title }) => {
  // console.log(queriedMovies);
  // console.log(movies);

  if (queriedMovies.length > 0) {
    return (
      <Container fluid>
        <h1>{title}</h1>
        <Row>
          {queriedMovies.map((movie) => (
            <SingleCard key={uuidv4()} item={movie} />
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <h1>{title}</h1>

        {movies.map((movie) => (
          <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
            <Rows movie={movie} />
          </Row>
        ))}
      </Container>
    );
  }
};

// const Home = ({ movies, queriedMovies }) => {
//   console.log(queriedMovies);
//   console.log(movies);
//   return (
//     <Container fluid>
//       {movies.map((movie) => (
//         <Row key={uuidv4()} className='overflow-auto flex-nowrap'>
//           <Rows movie={movie} />
//         </Row>
//       ))}
//     </Container>
//   );
// };

export default Home;
