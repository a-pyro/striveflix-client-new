import React from 'react';
import SingleCard from './SingleCard';
import { v4 as uuidv4 } from 'uuid';

const Rows = ({ movies }) => {
  console.log(movies);
  return (
    <>
      {movies.map((item) => (
        <SingleCard mode='display' key={uuidv4()} item={item} />
      ))}
    </>
  );
};

export default Rows;
