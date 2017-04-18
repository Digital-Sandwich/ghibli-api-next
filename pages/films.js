import React from 'react';
import axios from 'axios';
import PageHead from '../components/head';
import Link from 'next/link';
import Nav from '../components/nav';


class InfoCard extends React.Component {
  constructor() {
    super()
  }
  render(){
    return(
      <div>I'm InfoCard</div>
    )
  }
}

export default class Films extends React.Component {
	constructor() {
    super();
    this.state = {
      showInfo: false
    }
  }
  onClick(e){
    e.preventDefault();
    console.log('clicked');
    this.setState({showInfo: !this.state.showInfo})
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
        		
        	          {
        	            this.props.films.map( (film, i) => (
        	            	<p key={i} onClick={this.onClick.bind(this)}>{film.title}</p>
        	              ))
        	          }

        	          {this.state.showInfo && < InfoCard / >}
        	      </div>
            </div>
        )
      }
 }


