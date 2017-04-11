import React from 'react';
import axios from 'axios';
import PageHead from '../components/head';
import Link from 'next/link';
import Nav from '../components/nav';

class ReplyForm extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>I'm ReplyForm</div>
    )
  }
}

export default class Films extends React.Component {
	constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

	static async getInitialProps () {
	    const filmsRes = await axios.get('https://ghibliapi.herokuapp.com/films');

	    return {films: filmsRes.data,};
	    
	  }
      render() {
  	      	const tableStyle = {
  		  		backgroundColor: '#E1E2E1',
  		  		border: '1px solid #F5F5F6',
  		  		textAlign: 'center',
  	      	 };

  	      	 const divPosition = {
  		      	marginLeft: '0 auto',
  		      	marginRight: '0 auto',
  		      	width: '200px',
  	      	  };
        return (
        	<div>
        	<PageHead />
        	<Nav />


        	<div className='films-list' style={tableStyle, divPosition}>
        		<table className='data-table' style={divPosition, tableStyle}>
        	    	<thead>
        	          <tr>
        	              <th className='data-table-head'>Title</th>
        	          </tr>
        	        </thead>
        	        <tbody>
        	          {
        	            this.props.films.map( (film, i) => (
        	            	<tr key={i}>
        	            	<a onClick={this.onClick.bind(this)} href='#'>{film.title}</a>
        	            	       {this.state.showReply && < ReplyForm / >}
        	                    <td><a>{ film.title }</a></td>
        	                </tr>
        	              ))
        	          }
        	       </tbody>
        	      </table>

        	      <ShowHide />
        	      </div>
            </div>
        )
      }
 }

 var Child = React.createClass({
   render: function() {
     return (<div>I'm the child</div>);
   }
 });

 var ShowHide = React.createClass({
   getInitialState: function () {
     return { childVisible: false };
   },

   render: function() {
     return(
       <div>
         <div onClick={this.onClick}>
           Parent - click me to show/hide my child
         </div>
         {
           this.state.childVisible
             ? <Child />
             : null
         }
       </div>
     )
   },

   onClick: function() {
     this.setState({childVisible: !this.state.childVisible});
   }
 });

