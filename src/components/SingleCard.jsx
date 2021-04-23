import { Card, Col } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

const SingleCard = (props) => {
  const handleClick = () => {
    console.log(props);
    console.log(props.item.imdbID);
    props.history.push(`/details/${props.item.imdbID}`);
  };

  return (
    <>
      <Col>
        <Card onClick={handleClick} className='my-3' style={{ width: '8rem' }}>
          <Card.Img variant='top' src={props.item.Poster} />
        </Card>
      </Col>
    </>
  );
};

export default withRouter(SingleCard);
