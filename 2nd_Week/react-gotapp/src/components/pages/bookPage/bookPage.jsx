import React, { Component } from 'react';
import GotService from '../../../services/gotService';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ErrorMessage from './../../errorMessage/errorMessage';
import { Row, Col } from 'reactstrap';
import img from './book.jpg';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-right: 30px;
`;

const Div = styled.div`
  flex-grow: 1;
`;

export default class BookPage extends Component {
  got = new GotService();
  state = {
    loading: true,
    error: false,
    book: {}
  };

  componentDidMount() {
    this.got
      .getBook(this.props.itemId)
      .then(book => {
        this.setState({ loading: false, book });
      })
      .catch(() => this.onError());
  }
  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };
  render() {
    if (this.state.error)
      return (
        <Row>
          <Col sm={{ size: '6', offset: 3 }}>
            <Wrapper className="rounded">
              <ErrorMessage err={this.got.errMessage} status={this.got.status} />
            </Wrapper>
          </Col>
        </Row>
      );
    const { name, numberOfPages, publisher, released } = this.state.book;
    return (
      <Wrapper className="rounded">
        <h4>{name}</h4>
        <Info>
          <Image src={img} alt={name} />

          <Div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">NumberOfPages</span>
                <span>{numberOfPages}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Publisher</span>
                <span>{publisher}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="term">Released</span>
                <span>{released}</span>
              </li>
            </ul>
            <Link to="/books/" className="btn btn-info mt-3">
              Back to list of books
            </Link>
          </Div>
        </Info>
      </Wrapper>
    );
  }
}
