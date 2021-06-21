import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class BookCorsal extends React.Component{
    render(){
        const items = this.props.books.map(book => {
        return (
        <Carousel.Item>
        <img
        src="https://www.econlib.org/wp-content/uploads/2020/10/stack-of-books-200x300.jpg"
        alt="Books"/>
        <Carousel.Caption>
        <h3>{book.name}</h3>
        <p>{book.description}</p>
        </Carousel.Caption>
        </Carousel.Item> 
            )
        })
        return (
        <Carousel>
            {items}
        </Carousel>
    )
  }
}

export default BookCorsal;