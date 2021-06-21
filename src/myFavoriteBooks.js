import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BookCorsal from './BookCorsal';
import axios from 'axios';


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
    }
  }

  async componentDidMount() {
    const email = this.props.auth0.user.email;
    const booksReq = await axios.get(`${process.env.REACT_APP}/books?email=${email}`);
    await this.setState({books:booksReq.data});
  }
  render() {
    return(
      <Jumbotron>
        
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <div>
          <BookCorsal books={this.state.books} />
          </div>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
