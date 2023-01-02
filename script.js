const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed ,
		wind_speed2.innerHTML = response.wind_speed ,
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(city.value)
});
getWeather('Dhaka');

// Delhi Api fetch

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
		cloudPct2.innerHTML = response.cloud_pct
		temp22.innerHTML = response.temp
		feelsLike2.innerHTML = response.feels_like
		humidity22.innerHTML = response.humidity
		minTemp2.innerHTML = response.min_temp
		maxTemp2.innerHTML = response.max_temp
		windSpeed22.innerHTML = response.wind_speed 
		windDegree22.innerHTML = response.wind_degrees
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	// Maldives Api fetch

	const options3 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Maldives', options)
	.then(response => response.json())
	.then(response => {
		cloudPct3.innerHTML = response.cloud_pct
		temp33.innerHTML = response.temp
		feelsLike3.innerHTML = response.feels_like
		humidity33.innerHTML = response.humidity
		minTemp3.innerHTML = response.min_temp
		maxTemp3.innerHTML = response.max_temp
		windSpeed33.innerHTML = response.wind_speed 
		windDegree33.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
	})
	.catch(err => console.error(err));

	// Bali api fetch

	const options4 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bali', options)
	.then(response => response.json())
	.then(response => {
		cloudPct4.innerHTML = response.cloud_pct
		feelsLike4.innerHTML = response.temp
		humidity44.innerHTML = response.feels_like
		maxTemp4.innerHTML = response.humidity
		minTemp4.innerHTML = response.min_temp
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
		temp44.innerHTML = response.temp
		windSpeed44.innerHTML = response.wind_speed
		windDegree44.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));

	// Tokyo api fetch

	const options5 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then(response => {
		cloudPct5.innerHTML = response.cloud_pct
		feelsLike5.innerHTML = response.temp
		humidity55.innerHTML = response.feels_like
		maxTemp5.innerHTML = response.humidity
		minTemp5.innerHTML = response.min_temp
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset 
		temp55.innerHTML = response.temp
		windSpeed55.innerHTML = response.wind_speed
		windDegree55.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));


	// Sydney api fetch

	const options6 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
	.then(response => response.json())
	.then(response => {
		cloudPct6.innerHTML = response.cloud_pct
		feelsLike6.innerHTML = response.temp
		humidity66.innerHTML = response.feels_like
		maxTemp6.innerHTML = response.humidity
		minTemp6.innerHTML = response.min_temp
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset 
		temp66.innerHTML = response.temp
		windSpeed66.innerHTML = response.wind_speed
		windDegree66.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));

	// Riadh api fetch
	const options7 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'cab23cf245mshe60e5452eaf2f75p1280bejsn0dfa2bac5314',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Riyadh', options)
	.then(response => response.json())
	.then(response => {
		cloudPct7.innerHTML = response.cloud_pct
		feelsLike7.innerHTML = response.temp
		humidity77.innerHTML = response.feels_like
		maxTemp7.innerHTML = response.humidity
		minTemp7.innerHTML = response.min_temp
		sunrise7.innerHTML = response.sunrise
		sunset7.innerHTML = response.sunset
		temp77.innerHTML = response.temp
		windSpeed77.innerHTML = response.wind_speed
		windDegree77.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));