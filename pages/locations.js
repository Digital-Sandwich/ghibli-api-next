import React from 'react'
import axios from 'axios';
import PageHead from '../components/head'
import Link from 'next/link'
import Nav from '../components/nav'

export default class extends React.Component {
	static async getInitialProps () {
	    const locationsRes = await axios.get('https://ghibliapi.herokuapp.com/locations');

	    return {locations: locationsRes.data,};
	    
	  }
      render() {
      	console.log(this.props.locations)

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

        	<div className='locations-list' style={tableStyle, divPosition}>
        		<table className='data-table' style={divPosition, tableStyle}>
        	    	<thead>
        	          <tr>
        	              <th className='data-table-head'>Name</th>
        	          </tr>
        	        </thead>
        	        <tbody>
        	          {
        	            this.props.locations.map( (location, i) => (
        	            	<tr key={i}>
        	            	<td><a>{ location.name }</a></td>
        	                </tr>
        	              ))
        	          }
        	       </tbody>
        	      </table>
        	      </div>
            </div>
        )
      }
 }


