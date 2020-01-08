import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  

class Table extends Component {  
  constructor(props) {  
    super(props);
	}  
      
  DeleteStudent= () =>{  
		axios.delete('http://api-callbook.herokuapp.com/book/'+this.props.obj.Id)  
			.then(json => {  
    		if(json.data.Status==='Delete'){  
    			alert('Record deleted successfully!!');  
    		}  
    	})  
  }  

  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.title}  
          </td>  
          <td>  
            {this.props.obj.author}  
          </td>  
          <td>  
            {this.props.obj.link_book}  
          </td>  
          <td>  
            {this.props.obj.link_author}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table; 
