import React from 'react';
import axios from 'axios';
import PageHead from '../components/head';
import Nav from '../components/nav';
import FilmDiv from '../components/film-div';
import PeopleDiv from '../components/people-div';
import LocationsDiv from '../components/locations-div';
import VehiclesDiv from '../components/vehicles-div';
import Link from 'next/link';

export default class extends React.Component {
	static async getInitialProps () {
	    const filmsRes = await axios.get('https://ghibliapi.herokuapp.com/films');
	    const peopleRes = await axios.get('https://ghibliapi.herokuapp.com/people');
	    const locationsRes = await axios.get('https://ghibliapi.herokuapp.com/locations');
	    const speciesRes = await axios.get('https://ghibliapi.herokuapp.com/species');
	    const vehiclesRes = await axios.get('https://ghibliapi.herokuapp.com/vehicles');

	    return {people: peopleRes.data,
	    		films: filmsRes.data,
	    		locations: locationsRes.data,
	    		species: speciesRes.data,
	    		vehicles: vehiclesRes.data};
	  }
      render() {
      	const films = this.props.films;
      	const people = this.props.people;
      	const locations = this.props.locations;
      	const species = this.props.species;
      	const vehicles = this.props.vehicles;

      	let propsArr = films.concat(people, locations, vehicles);
      	let featuredItem = propsArr[Math.floor(Math.random()*propsArr.length)];
      	console.log(featuredItem);

      	let featuredItemDisplay= null;

      	if ('director' in featuredItem) { // film
			featuredItemDisplay =  <p>{featuredItem.director}</p>
		}
		else if ('gender' in featuredItem) { // people
			featuredItemDisplay =  <p>{featuredItem.gender}</p>
		}
		else if ('classification' in featuredItem) { // species
			featuredItemDisplay =  <p>{featuredItem.classification}</p>
		}
		else if ('pilot' in featuredItem) { // vehicles
			featuredItemDisplay =  <p>{featuredItem.pilot}</p>
		}
		else if ('classification' in featuredItem) { // species
			featuredItemDisplay =  <p>{featuredItem.pilot}</p>
		}
        return (
        	<div>
        	<PageHead />
        	<Nav />
        	<div>
        	<h3>Featured Item</h3>
        	
        		{featuredItemDisplay}
        	
        	</div> 

        	    <FilmDiv />

        	    <PeopleDiv />

        	    <LocationsDiv />

        	    <VehiclesDiv />

            </div>
        )
      }
 }
