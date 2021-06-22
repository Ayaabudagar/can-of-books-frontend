import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class AddNewBook extends React.Component{
  sendBookToDB = async (event) => {
    event.preventDefault();
    const queryParams = {
      params:{
      bookName:event.target.bookName.value,
      description:event.target.description.value , 
      status:event.target.status.value,
      }
    }
    console.log(queryParams);
    const postBook = await axios.get(`${process.env.REACT_APP}/savebook` , queryParams);
    console.log(postBook.status);
  }
  render(){
    return(
      <Form onSubmit={this.sendBookToDB}>
        <Form.Group>
          <Form.Control type='text' placeholder='Fav Books' name='bookName' />
          <Form.Control type='text' placeholder='Describe Books' name='description' />
          <Form.Control type='text' placeholder='Rate Books ! Good, Very Good , Excelent .... ' name='status' />
          <Button type='submit'>Add Book !</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default AddNewBook ;