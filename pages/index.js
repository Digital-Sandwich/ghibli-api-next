import React from 'react';
import axios from 'axios';
import Ghibli from '../data/ghibli';
import PageHead from '../components/head';
import Nav from '../components/nav';
import FilmDiv from '../components/film-div';
import PeopleDiv from '../components/people-div';
import Link from 'next/link';

export default class extends React.Component {
    static async getInitialProps () {
        const filmsRes = await axios.get('https://ghibliapi.herokuapp.com/films');
        const peopleRes = await axios.get('https://ghibliapi.herokuapp.com/people');
        const locationsRes = await axios.get('https://ghibliapi.herokuapp.com/locations');
        const vehiclesRes = await axios.get('https://ghibliapi.herokuapp.com/vehicles');

        return {people: peopleRes.data,
        		films: filmsRes.data,
        		locations: locationsRes.data,
        		vehicles: vehiclesRes.data};
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

        	    <FilmDiv />

        	    <PeopleDiv />

            </div>
        )
      }
 }


