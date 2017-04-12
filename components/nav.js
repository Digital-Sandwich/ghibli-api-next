import Link from 'next/link'

export default class Nav extends React.Component {
  render() {
  	let linkStyle = {
		textAlign: 'left',
		float: 'left',
		paddingRight: '1em',
  	};

  	let divStyle = {
  		paddingBottom: '2em',
  		border: '2px solid #519657'
  	};
    return (
		<div style={divStyle}>
			<div className='nav-link' style={linkStyle}>
	    	<Link href='/'>
	      		<a>Home</a>
	    	</Link>
	    	</div>

			<div className='nav-link' style={linkStyle}>
	    	<Link href='/films'>
	      		<a>Films</a>
	    	</Link>
	    	</div>

			<div className='nav-link' style={linkStyle}>
	    	<Link href='/people'>
	      		<a>People</a>
	    	</Link>
	    	</div>

			<div className='nav-link' style={linkStyle}>
	    	<Link href='/locations'>
	      		<a>Location</a>
	    	</Link>
	    	</div>

			<div className='nav-link' style={linkStyle}>
	    	<Link href='/vehicles'>
	      		<a>Vehicles</a>
	    	</Link>
	    	</div>
	  </div>
    );
  }
}
