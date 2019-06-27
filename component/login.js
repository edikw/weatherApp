import react from 'react'
import Link from 'next/link'
const styles = {
	background : 'rgba(255, 255, 255, 0.5)'
}
class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			alert: false
		}
	}

	handleInput(value) {
		this.setState({[value.target.name]: value.target.value})
	}

	submit() {
		if(this.state.email != '' && this.state.password != ''){
			var user = JSON.parse(localStorage.getItem('user'))
			console.log(user)
			for (var i = 0; i < user.length; i++) {
				if(user[i].email == this.state.email && user[i].password == this.state.password) {
					this.setState({alert : false})
					window.location.href = '/home'
				}else {
					this.setState({alert: true})
				}
			}
		}
	}
	render () {
		return (
			<div>
				<div className="col-5 mx-auto">
					<div className="card p-5" style={styles}>
						<h4 className="text-center">Login</h4>
						<hr className="m-0" />
						{this.state.alert == true ?
							<span className="text-danger text-center mt-2">Email atau Password anda salah. silahlan coba lagi</span>
							: null
						}
						<div className="py-5">
							<div className="mb-2">
								<input placeholder="Email" className="form-control" name="email" onChange={this.handleInput.bind(this)} ref="email" />
							</div>
							<div className="mb-2">
								<input type="password" placeholder="Password" className="form-control" name="password" onChange={this.handleInput.bind(this)} ref="password"/>
							</div>
							<div>
								<button className="btn btn-sm btn-info btn-block" onClick={()=> this.submit()}>submit</button>
							</div>
							<div className="py-2">
							<span>
								Belum punya akun? daftar
							</span>
								<Link href="/signup"><a className="text-muted ml-1">disini</a></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;