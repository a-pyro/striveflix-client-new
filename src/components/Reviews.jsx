import React, { Component } from 'react';
import { Container, Row, ListGroup, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default class Reviews extends Component {
  deleteReview = async (eleId, revid) => {
    try {
      const apiURL = process.env.REACT_APP_API_URL;
      const resp = await fetch(`${apiURL}/reviews/${eleId}/${revid}`, {
        method: 'DELETE',
      });
      if (resp.ok) {
        this.props.fetchReviews(eleId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEdit = () => {};
  render() {
    console.log(this.props.reviews);
    return (
      <Container>
        <h2>Comments</h2>
        <Row>
          <ListGroup>
            {this.props.reviews &&
              this.props.reviews.map((comm) => (
                <ListGroup.Item key={uuidv4()}>
                  {comm.comment}
                  <div>
                    <Button
                      onClick={() =>
                        this.deleteReview(comm.elementId, comm._id)
                      }
                      variant='danger'
                    >
                      del
                    </Button>
                    <Button onClick={this.handleEdit} variant='warning'>
                      edit
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Row>
      </Container>
    );
  }
}
