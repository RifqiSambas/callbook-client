import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios';
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeName = this.onChangeName.bind(this);  
    this.onChangeRollNo = this.onChangeRollNo.bind(this);  
    this.onChangeClass = this.onChangeClass.bind(this);  
    this.onChangeAddress = this.onChangeAddress.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            title: '',  
            author: '',  
            link_author: '',  
            link_book: ''  
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('http://api-callbook.herokuapp.com/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                title: response.data.title,   
                author: response.data.author,  
                link_book: response.data.link_book,  
                link_author: response.data.link_author });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeTitle(e) {  
    this.setState({  
        title: e.target.value  
    });  
  }  
  onChangeAuthor(e) {  
    this.setState({  
        RollNo: e.target.value  
    });    
  }  
  onChangeLinkBook(e) {  
    this.setState({  
        Class: e.target.value  
    });  
}  
    onChangeLinkAuthor(e) {  
        this.setState({  
            Address: e.target.value  
        });  
  }  
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        Id:this.props.match.params.id,  
      title: this.state.title,  
      author: this.state.author,  
      link_book: this.state.link_book,  
      link_author: this.state.link_author  
  
    };  
    axios.post('http://api-callbook.herokuapp.com/book/', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/Booklist')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Book Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="title" sm={2}>Title</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="title" value={this.state.title} onChange={this.onChangeTitle}  
                                placeholder="Enter Book Title" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="author" sm={2}>Author</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="author" value={this.state.author} onChange={this.onChangeAuthor} placeholder="Enter Book Author" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="link_book" sm={2}>Book Link</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="link_book" value={this.state.link_book} onChange={this.onChangeClass} placeholder="Enter Book Link" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="link_author" sm={2}>Author Link</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="link_author" value={this.state.link_author} onChange={this.onChangeLinkAuthor} placeholder="Enter Address" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
                            </Col>  
                            <Col sm={1}>  
                                <Button color="danger">Cancel</Button>{' '}  
                            </Col>  
                            <Col sm={5}>  
                            </Col>  
                        </FormGroup>  
                    </Col>  
                </Form>  
            </Container>  
        );  
    }  
  
}  
  
export default Edit;
