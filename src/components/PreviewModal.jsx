import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import SingleCard from './SingleCard';

const PreviewModal = ({ children, suggestions, getMovieFields }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{children}</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pick a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {suggestions?.map((mov) => (
                <SingleCard
                  handleClose={handleClose}
                  getMovieFields={getMovieFields}
                  mode='add'
                  item={mov}
                />
              ))}
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PreviewModal;
