import Link from 'next/link';
import Head from 'next/head'
import Navbar from './navbar'
const styles = {
	backgroundImage: "url(" + "https://images.squarespace-cdn.com/content/v1/58943b1015d5db8ef4ad113d/1556592457973-VTFA1ZWY99L0K5BJ31ZF/ke17ZwdGBToddI8pDm48kLi3mVkSwytatDMgEkQJQKZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UXp7q7_sOX-uD7LUF9xp3U-HikImBGUZg0QCgYgA_jhnst5bHR_ieXZcSc96uHG9Cg/Clouds_LR.jpg?format=1500w" + ")",
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	// background: '#e44534',
	height: '100vh'
}
const Layout = (props) => (
	<div>
		<Head>
			<title>Weather App</title>
	    	<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
		</Head>
		<div style={styles}>
			{props.children}
		</div>
	</div>
)

export default Layout;