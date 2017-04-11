import Link from 'next/link'

export default class Nav extends React.Component {
  render() {
  	let linkStyle = {
		textAlign: 'left',
		float: 'left',
		paddingRight: '1em',
  	}

  	let divStyle = {
  		paddingBottom: '2em'

  	}

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
	  </div>
    );
  }
}
