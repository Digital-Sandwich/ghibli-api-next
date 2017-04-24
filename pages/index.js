/*TO DO
-display all properties of featured item
-display properties of item when clicked
/TO DO */

import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import PageHead from '../components/head';
import Nav from '../components/nav';
import AppTitle from '../components/app-title';
import FilmDiv from '../components/film-div';
import PeopleDiv from '../components/people-div';
import LocationsDiv from '../components/locations-div';
import SpeciesDiv from '../components/species-div';
import VehiclesDiv from '../components/vehicles-div';

export default class extends React.Component {
	static async getInitialProps () {
	    const filmsRes = await axios.get('https://ghibliapi.herokuapp.com/films');
	    const peopleRes = await axios.get('https://ghibliapi.herokuapp.com/people');
	    const locationsRes = await axios.get('https://ghibliapi.herokuapp.com/locations');
	    const speciesRes = await axios.get('https://ghibliapi.herokuapp.com/species');
	    const vehiclesRes = await axios.get('https://ghibliapi.herokuapp.com/vehicles');

	    return {films: filmsRes.data,
	    		people: peopleRes.data,
	    		locations: locationsRes.data,
	    		species: speciesRes.data,
	    		vehicles: vehiclesRes.data};
	  }
      render() {
      	const featuredItemDivStyle = {
      		listStyleType: 'none',
      		backgroundColor: '#a5d6a7',
			border: '1px solid #F5F5F6',
			textAlign: 'center',
			verticalAlign: 'middle',
			lineHeight: '1.7em',
			borderRadius: '25px',
			height: 'auto',
      	};
      	const films = this.props.films;
      	const people = this.props.people;
      	const locations = this.props.locations;
      	const species = this.props.species;
      	const vehicles = this.props.vehicles;

      	let propsArr = films.concat(people, locations, vehicles);
      	let featuredItem = propsArr[Math.floor(Math.random()*propsArr.length)];

      	let featuredItemName;

      	let featuredItemDisplay = null;

      	if ('director' in featuredItem) {
      		featuredItemName = featuredItem.title + ' (Film)' ;
			featuredItemDisplay =  
			<div>
				<li><b>Title:</b> {featuredItem.title}</li>
				<li><b>Description:</b> {featuredItem.description}</li>
				<li><b>Director:</b> {featuredItem.director}</li>
				<li><b>Producer:</b> {featuredItem.producer}</li>
				<li><b>Release Date:</b> {featuredItem.release_date}</li>
				<li><b>Rotten Tomatoes Score:</b> {featuredItem.rt_score}%</li>
			</div>
		}
		else if ('gender' in featuredItem) {
			featuredItemName = featuredItem.name + ' (Person)' ;
			featuredItemDisplay =  
			<div>
				<li><b>Name:</b> {featuredItem.name}</li>
				<li><b>Gender:</b> {featuredItem.gender}</li>
				<li><b>Age:</b> {featuredItem.age}</li>
				<li><b>Eye Color:</b> {featuredItem.eye_color}</li>
				<li><b>Hair Color:</b> {featuredItem.hair_color}</li>
				<li><b>Films:</b> {featuredItem.films}</li> 
				<li><b>Species:</b> {featuredItem.species}</li>
			</div>
		}
		else if ('climate' in featuredItem) {
			featuredItemName = featuredItem.name + ' (Location)' ;
			featuredItemDisplay =  
			<div>
				<li><b>Name:</b> {featuredItem.name}</li>
				<li><b>Climate:</b> {featuredItem.climate}</li>
				<li><b>Terrain:</b> {featuredItem.terrain}</li>
				<li><b>Surface Water:</b> {featuredItem.surface_water}</li>
				<li><b>Residents:</b> {featuredItem.residents}</li>
				<li><b>Films:</b> {featuredItem.films}</li>
			</div>
		}
		else if ('classification' in featuredItem) {
			featuredItemName = featuredItem.name + ' (Species)' ;
			featuredItemDisplay =  
			<div>
				<li><b>Name:</b> {featuredItem.name}</li>
				<li><b>Classification:</b> {featuredItem.classification}</li>
				<li><b>Eye Color(s):</b> {featuredItem.eye_colors}</li>
				<li><b>Hair Color(s):</b> {featuredItem.hair_colors}</li>
				<li><b>People:</b> {featuredItem.people}</li>
				<li><b>Films:</b> {featuredItem.films}</li>
			</div>
		}
		else if ('pilot' in featuredItem) {
			featuredItemName = featuredItem.name + ' (Vehicle)' ;
			featuredItemDisplay = 
			<div>
				<li><b>Name:</b> {featuredItem.name}</li>
				<li><b>Description:</b> {featuredItem.description}</li>
				<li><b>Vehicle Class(s):</b> {featuredItem.vehicle_class}</li>
				<li><b>Length(s):</b> {featuredItem.length}</li>
				<li><b>Pilot:</b> {featuredItem.pilot}</li>
				<li><b>Films:</b> {featuredItem.films}</li>
			</div>
		}
        return (
	    	<div>

	    		<PageHead />

	    		<Nav />
	    		<AppTitle />


	    		<div className='featured-item-div' style={featuredItemDivStyle}>
	    		<h3>Featured Item: <em>{featuredItemName}</em></h3>
	    	
	    			{featuredItemDisplay}
	    	
	    		</div> 

	    	    <FilmDiv />

	    	    <PeopleDiv />

	    	    <LocationsDiv />

	    	    <SpeciesDiv />

	    	    <VehiclesDiv />

	        </div>
        )
      }
 }
