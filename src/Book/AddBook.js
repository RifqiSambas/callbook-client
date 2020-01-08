import React from 'react';
import axios from 'axios';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

class Addbook extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			author: '',
			link_book: '',
			link_author: '',
		}
	}

	AddBook = () => {
		axios.post('http://api-callbook.herokuapp.com/book', {
			title: 'this.state.title',
			author: 'this.state.author',
			link_book: 'this.state.link_book',
			link_author: 'this.state.link_author'
		}).then(json => {
			if(json.data.status === 'success'){
				console.log(json.data.status);
				alert('Berhasil menambah data');
				this.props.history.push('/Booklist')
			}else{
				alert('Gagal menambah data');
				debugger;
				this.props.history.push('/Booklist')
			}
		})
	}

	handleChange = (e) => {
		this.setState({[e.target.name]:e.target.value});
	}

	render(){
		return(
			<Container className="App">  
				<h4 className="PageHeading">Enter Book Informations</h4>  
				<Form className="form">  
					<Col>  
						<FormGroup row>  
							<Label for="name" sm={2}>title</Label>  
							<Col sm={10}>  
								<Input type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Masukan judul buku" />  
							</Col>  
						</FormGroup>  
						<FormGroup row>  
							<Label for="author" sm={2}>author</Label>  
							<Col sm={10}>  
								<Input type="author" name="author" onChange={this.handleChange} value={this.state.author} placeholder="Masukan penulis buku" />  
							</Col>  
						</FormGroup>  
						<FormGroup row>  
							<Label for="link_book" sm={2}>book link</Label>  
							<Col sm={10}>  
								<Input type="text" name="link_book" onChange={this.handleChange} value={this.state.link_book} placeholder="Masukan link buku" />  
							</Col>  
						</FormGroup>  
						<FormGroup row>  
							<Label for="link_author" sm={2}>author link</Label>  
							<Col sm={10}>  
								<Input type="text" name="link_author" onChange={this.handleChange} value={this.state.link_author} placeholder="Masukan link author" />  
							</Col>  
						</FormGroup>  
					</Col>  
					<Col>  
						<FormGroup row>  
							<Col sm={5}>  
							</Col>  
							<Col sm={1}>  
							<button type="button" onClick={this.Addbook} className="btn btn-success">Submit</button>  
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
		)
	}	
}

export default Addbook;
