import Link from 'next/link';
import Head from 'next/head';
import Layout from './layout';

const styles = {
	fontFamily: 'monospace',
	fontSize: '50px',
	color: '#034172'
}
const button = {
	border: '1px solid #034172',
}

const Index = () => (
	<Layout>
		<div className="col-5 py-5 mx-auto">
			<div className="text-center">
				<h1 className="font-weight-bold" style={styles}>Weather Finder</h1>
				<div>
					<Link href="/login"><button type="button" className=" col-3 btn btn-info btn-lg mr-2">Login</button></Link>
					<Link href="/signup"><button type="button" className="col-3 btn btn-info btn-lg">Signup</button></Link>
				</div>
			</div>
		</div>
	</Layout>
)

export default Index;