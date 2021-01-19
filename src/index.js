import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompetitorsStore from './stores/competitorsStore';
import { Provider } from 'mobx-react';
const axios = require('axios');

let competitorsStore = new CompetitorsStore([])
let stores = {competitorsStore}

let fetchCompetitors = async () => {
	let response = await axios.get('http://localhost:8000/getPrices')
	competitorsStore.updateCompetitors(response.data)
}

fetchCompetitors()


ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
