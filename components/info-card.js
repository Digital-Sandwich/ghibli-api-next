import React from 'react';

export default class InfoCard extends React.Component {
  render(){
	const infoCardStyle = {
		postiton: 'fixed',
		top: '0',
		width: '100vw',
		listStyleType: 'none',
		backgroundColor: '#a5d6a7',
		border: '1px solid #F5F5F6',
		textAlign: 'center',
		verticalAlign: 'middle',
		lineHeight: '1.7em',
		borderRadius: '25px',
		height: 'auto',
	};

	let dataArr = this.props.films;

	let infoCardRender = null;

	if ('director' in dataArr) {
	infoCardRender =  
	<div className='infoCard' style={infoCardStyle}>
		<li><b>Title:</b> {this.props.films[this.state.currentFilmId].title}</li>
		<li><b>Description:</b> {this.props.films[this.state.currentFilmId].description}</li>
		<li><b>Director:</b> {this.props.films[this.state.currentFilmId].director}</li>
		<li><b>Producer:</b> {this.props.films[this.state.currentFilmId].producer}</li>
		<li><b>Release Date:</b> {this.props.films[this.state.currentFilmId].release_date}</li>
		<li><b>Rotten Tomatoes Score:</b> {this.props.films[this.state.currentFilmId].rt_score}%</li>
	</div>	
	}
	else if ('gender' in dataArr) {
	infoCardRender =  
	<div className='infoCard' style={infoCardStyle}>
		<li><b>Name:</b> {this.props.people[this.props.currentPersonId].name}</li>
		<li><b>Gender:</b> {this.props.people[this.props.currentPersonId].gender}</li>
		<li><b>Age:</b> {this.props.people[this.props.currentPersonId].age}</li>
		<li><b>Eye Color:</b> {this.props.people[this.props.currentPersonId].eye_color}</li>
		<li><b>Hair Color:</b> {this.props.people[this.props.currentPersonId].hair_color}</li>
		<li><b>Films:</b> {this.props.people[this.props.currentPersonId].films}</li>
		<li><b>Species:</b> {this.props.people[this.props.currentPersonId].species}</li>
	</div>
	}
	else if ('climate' in dataArr) {
	infoCardRender =  
	<div className='infoCard' style={infoCardStyle}>
		<li><b>Name:</b> {this.props.locations[this.props.currentLocationId].name}</li>
		<li><b>Climate:</b> {this.props.locations[this.props.currentLocationId].climate}</li>
		<li><b>Terrain:</b> {this.props.locations[this.props.currentLocationId].terrain}</li>
		<li><b>Surface Water:</b> {this.props.locations[this.props.currentLocationId].surface_water}</li>
		<li><b>Residents:</b> {this.props.locations[this.props.currentLocationId].residents}</li>
		<li><b>Films:</b> {this.props.locations[this.props.currentLocationId].films}</li>
	</div>
	}
	else if ('classification' in dataArr) {
	infoCardRender =  
	<div className='infoCard' style={infoCardStyle}>
		<li><b>Name:</b> {this.props.species[this.props.currentSpeciesId].name}</li>
		<li><b>Classification:</b> {this.props.species[this.props.currentSpeciesId].classification}</li>
		<li><b>Eye Color(s):</b> {this.props.species[this.props.currentSpeciesId].eye_colors}</li>
		<li><b>Hair Color(s):</b> {this.props.species[this.props.currentSpeciesId].hair_colors}</li>
		<li><b>People:</b> {this.props.species[this.props.currentSpeciesId].people}</li>
		<li><b>Films:</b> {this.props.species[this.props.currentSpeciesId].films}</li>
	</div>
	}
	else if ('pilot' in dataArr) {
	infoCardRender = 
	<div className='infoCard' style={infoCardStyle}>
		<li><b>Name:</b> {this.props.vehicles[this.props.currentVehicleId].name}</li>
		<li><b>Description:</b> {this.props.vehicles[this.props.currentVehicleId].description}</li>
		<li><b>Vehicle Class(s):</b> {this.props.vehicles[this.props.currentVehicleId].vehicle_class}</li>
		<li><b>Length:</b> {this.props.vehicles[this.props.currentVehicleId].length} m</li>
		<li><b>Pilot:</b> {this.props.vehicles[this.props.currentVehicleId].pilot}</li>
		<li><b>Films:</b> {this.props.vehicles[this.props.currentVehicleId].films}</li>
	</div>
	}
    return(
	<div>
		{infoCardRender}
	</div>
    )
  }
}