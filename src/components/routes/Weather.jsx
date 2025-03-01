import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from "axios";

// Import Weather Icons
import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';

const WeatherCard = ({ weather, index }) => {
  const weatherItems = [
    {
      label: 'Sol',
      value: weather.dateSol || 'N/A',
      icon: clear_day,
      alt: 'Sol',
    },
    {
      label: 'Pressure',
      value: weather.pressure ? `${weather.pressure} Pa` : 'Missing data',
      icon: barometer,
      alt: 'Pressure',
    },
    {
      label: 'Max Temperature',
      value: weather.highCelsius !== "N/A" ? `${weather.highCelsius} °C` : 'N/A',
      icon: thermometer_warmer,
      alt: 'Maximum Temperature',
    },
    {
      label: 'Min Temperature',
      value: weather.lowCelsius !== "N/A" ? `${weather.lowCelsius} °C` : 'N/A',
      icon: thermometer_colder,
      alt: 'Minimum Temperature',
    },

  ];

  return (
    <div key={index} className='grid md:grid-cols-2 parallax blur__card items-center justify-around py-[2rem] mt-8 mx-8'>
      <div className='text-[2rem] col-span-2 text-center font-bold italic'>{weather.UTC}</div>
      {weatherItems.map((item, i) => (
        <div key={i} className='md:flex md:flex-col md:items-center'>
          <div className='w-[6rem] md:w-[8rem]'>
            <img src={item.icon} alt={item.alt} className='w-[100%] object-contain' />
          </div>
          <div className='text-[1.5rem] text-center text-orange-500'>{item.label}</div>
          <div className='text-[1.3rem] md:text-[2rem] text-center font-medium'>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    dateSol: PropTypes.string.isRequired,
    UTC: PropTypes.string.isRequired,
    highCelsius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    lowCelsius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pressure: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      try {
        console.log("Fetching Weather Data...");
        const API_KEY = '3gdaS7EfzvN0wGfCVqKhm8atgymXVO7BSi2s0Hnq';
        const response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);

        // Extract response data
        const newdata = response.data;
        console.log("Raw API Data:", newdata);

        if (!newdata.sol_keys || newdata.sol_keys.length === 0) {
          console.error("No valid weather data found.");
          setLoading(false);
          return;
        }

        // Transform Object to Array & Sort
        const formattedData = newdata.sol_keys.map(sol => ({
          dateSol: sol,
          UTC: newdata[sol].First_UTC || "Unknown UTC",
          highCelsius: newdata[sol].AT?.mx || "N/A",
          lowCelsius: newdata[sol].AT?.mn || "N/A",
          pressure: newdata[sol].PRE?.av || "Missing data",
        })).sort((a, b) => Number(b.dateSol) - Number(a.dateSol)); // Sort by Sol number

        console.log("Formatted Weather Data:", formattedData);
        setWeatherData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(true);
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  return (
    <div className='text-white'>
      {loading ? (
        <div className='h-[80vh] flex justify-center items-center'>
          <video autoPlay loop src="/assets/astronaut.webm" className="mx-auto w-[50%] h-[50%]" />
        </div>
      ) : error ? (
        <div className='text-center text-red-500 mt-10 text-2xl'>Error fetching weather data. Try again later.</div>
      ) : (
        <div>
          <div className='flex flex-col items-center px-5 text-center'>
            <p className='font-bold text-[4rem] text-white text-center blink__word select-none my-10'>
              Weather
            </p>
            <p className='text-[1.3rem] md:text-[1.5rem] xl:text-[1.8rem] font-medium'>
              <Link to="/about/rovers/active/curiosity" className='text-orange-500 font-bold blink'>Curiosity </Link>
              is taking daily weather measurements at Gale Crater in the southern hemisphere of Mars, near the equator.
            </p>
          </div>

          {/* Display Weather Data */}
          <div className='flex flex-wrap justify-center'>
            {weatherData.length > 0 ? (
              weatherData.map((weather, index) => (
                <WeatherCard key={index} weather={weather} index={index} />
              ))
            ) : (
              <p className="text-center text-red-500">No weather data available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
