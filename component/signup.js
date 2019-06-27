import react from 'react'
import Link from 'next/link'
const styles = {
	background: 'rgba(255, 255, 255, 0.5)'
}
class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
	}

	handleInput(value) {
		this.setState({[value.target.name]: value.target.value})
	}

	submit() {
		if(this.state.email != '' && this.state.password != '') {
			if(localStorage.getItem('user')) {
				var user = {
					email: this.state.email,
					password: this.state.password
				}
				var store = JSON.parse(localStorage.getItem('user'));
				store.push(user)
				localStorage.setItem('user', JSON.stringify(store));
				window.location.href = '/login'

			}else {
				var user2 = {
					email: this.state.email,
					password: this.state.password
				}
				localStorage.setItem('user', JSON.stringify([user2]))
				window.location.href = '/login'
			}
		}
	}
	render () {
		return (
			<div>
				<div className="col-5 mx-auto">
					<div className="card p-5" style={styles}>
						<h4 className="text-center">Signup</h4>
						<hr className="m-0" />
						<div className="py-5">
							<div className="mb-2">
								<input placeholder="Email" className="form-control" name="email" onChange={this.handleInput.bind(this)} />
							</div>
							<div className="mb-2">
								<input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleInput.bind(this)} />
							</div>
							<div>
								<button className="btn btn-sm btn-info btn-block" onClick={()=> this.submit()}>submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Signup;