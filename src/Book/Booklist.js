import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Booklist extends Component {  
  
  constructor(props) {  
		super(props);  
		this.state = {business: []};  
	}  

	componentDidMount(){  
		debugger;  
		axios.get('http://localhost:52564/Api/Student/Studentdetails')  
			.then(response => {  
				this.setState({ business: response.data });  
				debugger;  
			})  
			.catch(function (error) {  
				console.log(error);  
			})  
	}  
      
	tabRow(){  
		return this.state.book.map(function(object, i){  
				return <Table obj={object} key={i} />;  
		});  
	}  
  
	render() {  
		return (  
			<div>  
				<h4 align="center">Book List</h4>  
				<table className="table table-striped" style={{ marginTop: 10 }}>  
					<thead>  
						<tr>  
							<th>title</th>  
							<th>author</th>  
							<th>link_book</th>  
							<th>link_author</th>  
							<th colSpan="4">Action</th>  
						</tr>  
					</thead>  
					<tbody>  
					 { this.tabRow() }   
					</tbody>  
				</table>  
			</div>  
		);  
	}  
}  
