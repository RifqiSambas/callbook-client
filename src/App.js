import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://api-callbook.herokuapp.com';

class App extends Component {

	state = {
		books: []
	}

	componentDidMount(){
		const url = `${API_URL}/book`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ books: data })
      console.log(this.state.books)
     })
	}

  render() {
    return (
			<div className="container mt-5 ">
				<div className="col-xs-8 mb-4">
					<h1>callbook</h1>
					<p>list of programming book recomendation</p>
				</div>
				<div className="row">
					{this.state.books.map((book) => (
					<div className="col-md-3 mb-4">
						<div className="card" key={book._id}>
							<img className="card-img-top" src={book.image} alt={book.title} />
							<div className="card-body">
								<h5 className="card-title">
									<a href={book.link_book}>{book.title}</a>
								</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									<a href={book.link_author}>{book.author}</a>             
								</h6>
							</div>
						</div>
					</div>
					))}
       	</div>
      </div>    
		);
  }
}
export default App;
