const express = require('express');
const app = express();
var cors = require('cors');
const fetchPrices = require('./fetchCompetitors');
const competitorsData = require('./competitors');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors());

app.get('/getPrices', async function (req, res) {
	console.log('someone is asking for your data!')
	let data = await fetchPrices(competitorsData)
	res.send(data)
});

const port = 8000
app.listen(port, function () {
	console.log(`server is running on port ${port}`)
});