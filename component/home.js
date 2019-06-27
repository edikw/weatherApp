import react from 'react'
import Layout from '../pages/layout'
import axios from 'axios'
import { connect } from 'react-redux';
import {getWeather} from '../actions/weather'
import { Provider } from 'react-redux';
// import store from '../store'
import { createStore } from 'redux';
import weatherApp from '../reducers'
const store = createStore(weatherApp)
const API_KEY = "df05602edb5dcfcf3f9bf5e033234419"


const form ={
	background: 'rgba(255, 255, 255, 0.7)',
	height: '50vh'
}
const text = {
	color: '#e44534'
}
const title = {
	fontFamily: 'monospace',
	color: '#034172'
}
const input = {
	background: 'transparent',
	border: '1px solid #17a2b8',
}
class home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			location: '',
			data_weather: '',
			data_country: '',
			data_location: '',
			data_conditions: []

		}
	}

	handleInput(value) {
		this.setState({[value.target.name]: value.target.value})
	}

	getWeather () {
		if(this.state.location != '') {
			const location = this.state.location
			// this.props.getWeather(location).then(res => {
			// 	console.log(res)
			// })
			axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`).then(res=> {
				console.log(res)
				this.setState({
					data_location: res.data,
					data_weather: res.data.main,
					data_country: res.data.sys,
					data_conditions: res.data.weather
				})
			})
		}
	}
	render () {
		return (
			<Layout>
				<div className="py-5">
					<div className="text-center py-5">
						<h3 style={title}>
							Find out temperature, weather conditions and more
						</h3>
					</div>
					<div>
						<div className="col-5 mx-auto p-5 rounded" style={form}>
							<div className=" d-flex">
								<div className="mb-2 col">
									<input placeholder="location" className="form-control" name="location" onChange={this.handleInput.bind(this)} style={input} />
								</div>
								<div className="align-item-center">
									<button type="button" className="btn btn-outline-info" onClick={()=>this.getWeather()} >Get Weather</button>
								</div>
							</div>
							{this.state.data_location != '' ?
								<div className="p-3">
									<div>
										<span className="text-info font-weight-bold">Location : <span className="text-muted"> {this.state.data_location.name}, {this.state.data_country.country}</span></span>
									</div>
									<hr className="my-3 bg-mute"/>
									<div>
										<span className="text-info font-weight-bold">Temperature : <span className="text-muted">{this.state.data_weather.temp} 'C</span></span>
									</div>
									<hr className="my-3 bg-mute"/>

									<div>
										<span className="text-info font-weight-bold">Humidity : <span className="text-muted">{this.state.data_weather.humidity}</span></span>
									</div>
									<hr className="my-3 bg-mute"/>

									{this.state.data_conditions.map((cond, i)=> {
										return (
										<div key={i}>
											<span className="text-info font-weight-bold">Conditions : <span className="text-muted">{cond.description}</span></span>
										</div>
										)
									})}
									<hr className="my-3 bg-mute"/>
								</div>
								: null
							}
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default home;
// export default connect(null, {getWeather})(home);