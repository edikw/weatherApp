import Link from 'next/link';
const navbar = {
	background: 'rgba(19,153,201,1)'
}
const Navbar = () => (
	<div>
		<nav className="navbar navbar-expand-lg justify-content-end" style={navbar}>
			<div>
				<a className="navbar-brand text-dark font-weight-bold" href="/">Home</a>
			</div>
			<div>
				<ul className="nav">
					<li className="nav-item m-2">
						<Link href="/login">
							<button className="btn btn-sm btn-warning">Login</button>
						</Link>
					</li>
					<li className="nav-item m-2">
						<Link href="/signup">
							<button className="btn btn-sm btn-warning">Signup</button>
						</Link>
				  </li>
				</ul>
			</div>
		</nav>
	</div>
)

export default Navbar;