import React, { Component } from 'react';
import ComparisonTable from './components/comparisonTable';
import { observer } from 'mobx-react';


class App extends Component {


	render() {
		return <div><ComparisonTable /></div>
	}

}

export default observer(App);
