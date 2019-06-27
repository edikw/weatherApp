import axios from 'axios';
const API_KEY = "df05602edb5dcfcf3f9bf5e033234419"


export function doFetchWeather(data) {
  return {
    type: 'FETCH_POST',
    data: data
  };
}

export function getWeather(location) {
  return dispatch => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`).then( res => {
	      dispatch(doFetchWeather(res.data))
	      return res.data
    });
  }
}


