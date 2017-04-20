import React from 'react';
import axios from 'axios';
import PageHead from '../components/head';
import Link from 'next/link';
import Nav from '../components/nav';

export default class Films extends React.Component {
	constructor() {
    super();
    this.state = {
      showInfo: false,
      currentFilmId: undefined,
    };
  }
  onClick(){
    this.setState({showInfo: !this.state.showInfo});
  }
  handleClick(i, event) {
  	this.setState({currentFilmId: i});
  	console.log('currentFilmId ' + this.state.currentFilmId);

  	alert(i);
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
        	            this.props.films.map((film, i) => (
        	            	<div key={i} onClick={this.onClick.bind(this), this.handleClick.bind(this, i)}>
        	            		<h4>{film.title}</h4>
        	            	</div>
        	            ))
        	          }
        	          {this.state.showInfo && <InfoCard films={this.props.films} / >}
        	    </div>
            </div>
        )
      }
 }

class InfoCard extends React.Component {
  constructor() {
    super();
  }
  render(){
    return(
    	<div>
    		<p>I'm InfoCard</p>
    		<p>{this.props.films[0].title}</p>
    	</div>
    )
  }
}

