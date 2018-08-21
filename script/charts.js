// ORDER OF EVENTS:
// Step 1: DOMContentLoaded
// Step 2: Google chart library loaded - moved google.charts lines into onDOMLoad() function
// Step 3: Get data from API - change to setOnLoadCallack(getData) instead of drawChart2
// Step 4: Data received from the API
// Step 5: Draw chart

function onDOMLoad() {
	console.log("Load Google library")
	google.charts.load('current', {packages: ['corechart']});
	google.charts.setOnLoadCallback(getRenewableEnergyData);
	google.charts.setOnLoadCallback(getEnergyConsumptionData);
}

document.addEventListener("DOMContentLoaded",onDOMLoad)

function getRenewableEnergyData() {
	console.log("Getting data is the third step.")

	let request = new XMLHttpRequest()
	let requestUrl = "https://api.eia.gov/series/?api_key=172ffbfd5cfe29fb085835f6180c4217&series_id=SEDS.REPRB.FL.A"
	request.open('GET', requestUrl, true)

	request.onload = function(){
		if (request.status !== 200) {
			console.log("Someting went wrong: ", request)
			return
		}
		let response = JSON.parse(request.response)
		drawChart(response.series[0].data,'renewable-energy-production-chart','Renewable Energy Production in Florida by Year')
	}

	request.error = function(err){
		console.log("error is: ", err)
		return
	}

	request.send()
}

// Function for Total Energy Consumption
function getEnergyConsumptionData() {
	let request = new XMLHttpRequest()
	let requestUrl = "https://api.eia.gov/series/?api_key=172ffbfd5cfe29fb085835f6180c4217&series_id=SEDS.TETCB.FL.A"

	// Request data
	request.open('GET',requestUrl)

	// If data request fails, then run function to show error message
	request.onload = function() {
		if (request.status !==200) {
			console.log("Something went wrong: ", request)
			return
		}

		// Parse response and concert data to JavaScript object
		let response = JSON.parse(request.response)
		
		// Call drawChart function
		drawChart(response.series[0].data,'energy-consumption-chart','Total Energy Consumption in Florida by Year')
	}

	// Error message
	request.error = function(err){
		console.log("error is: ", err)
		return
	}

	request.send()
}

// Renewable energy production chart function
// Create the data table.

// Pass freshData (will be the retrieved data from API)
function drawChart(freshData, id, title) {
	// freshData is array of arrays e.g., [["2018, 32192930]]
	//	let headerArray = ["title","other title"]
	//	freshData.shift(headerArray);

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'BTU');
	data.addRows(freshData);

	// Sort chart to show line graph from old to current
	data.sort({column: 0, asc: true});

	// Set chart options
	var options = {'title': title,
																curveType: 'function',
																backgroundColor: {fill:'transparent'},
																'legend': 'none',
																'width':400,
																'height':300};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.LineChart(document.getElementById(id));
	chart.draw(data, options);
}