#Country-City

NPM package for a list of countries with their known cities, that is forked from [countries-cities](https://www.npmjs.com/package/countries-cities) package, to fix some bugs related to loading cities.

```javascript
var countries = require ('countries-cities').getCountries(); // Returns an array of country names.
var cities = require ('countries-cities').getCities(country_name); // Returns an array of city names of the particualr country.
```
