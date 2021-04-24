import { Card, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

const SingleCard = (props) => {
  const handleClick = () => {
    console.log(props);
    console.log(props.item.imdbID);
    props.history.push(`/details/${props.item.imdbID}`);
  };

  const handleAdd = () => {
    props.getMovieFields(
      props.item.Title,
      props.item.Year,
      props.item.imdbID,
      props.item.Type,
      props.item.Poster
    );
    props.handleClose();
  };

  return (
    <>
      {props.mode === 'display' && (
        <Col>
          <Card
            onClick={handleClick}
            className='my-3'
            style={{ width: '8rem' }}
          >
            <Card.Img variant='top' src={props.item.Poster} />
          </Card>
        </Col>
      )}
      {props.mode === 'add' && (
        <Col>
          <Card onClick={handleAdd} className='my-3' style={{ width: '8rem' }}>
            <Card.Img variant='top' src={props.item.Poster} />
          </Card>
        </Col>
      )}
    </>
  );
};

export default withRouter(SingleCard);
