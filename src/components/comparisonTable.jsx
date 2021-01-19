import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class ComparisonTable extends Component {


	render() {

		return (
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
						<TableCell>מתחרים</TableCell>
							 <TableCell>עגבניה</TableCell>
							 <TableCell>מלפפון</TableCell>
							 <TableCell>בננה</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{this.props.competitorsStore.competitorsList.map((competitor) => (
							<TableRow>
								<TableCell>
									{competitor.name}
								</TableCell>
								{competitor.products.map((product) => <TableCell>₪{product.price}</TableCell>)}
							</TableRow>
						))}
					</TableBody>

				</Table>
			</TableContainer>
			// <div>
			// 	{this.props.competitorsStore.competitorsList.map(competitor => <h1>{competitor.products[0].price}</h1>)}
			// </div>
		)
	}

}

export default inject("competitorsStore")(observer(ComparisonTable));