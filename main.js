module.exports = { 
    getCountries : function () { 
        var data = require('./data.json');
	var countries = [];
	for (key in data["countries"]) {
	    countries.push(key);
	}
	return countries;
    }, 

    getCities : function (country) {
        var cities = [];
	var data = require('./data.json');
	for (key in data["countries"]) {
	    if (key.toLowerCase() === country.toLowerCase()) {
	        cities = data["countries"][key];
	    }
	}
	return cities;
    }
};
