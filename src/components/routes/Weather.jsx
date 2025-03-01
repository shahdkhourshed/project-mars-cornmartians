import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import barometer from '/assets/weather/barometer.svg';
import clear_day from '/assets/weather/clear_day.svg';
import sunrise from '/assets/weather/sunrise.svg';
import sunset from '/assets/weather/sunset.svg';
import thermometer_colder from '/assets/weather/thermometer_colder.svg';
import thermometer_warmer from '/assets/weather/thermometer_warmer.svg';
import axios from "axios";

const WeatherCard = ({ weather, index }) => {
  const weatherItems = [
    {
      label: 'Sol',
      value: weather.dateSol,
      icon: clear_day,
      alt: 'Sol',
    },
    {
      label: 'Pressure',
      value: `${weather.pressure} Pa || 'Missing data'`,
      icon: barometer,
      alt: 'Pressure',
    },
    {
      label: 'Max Temperature',
      value: `${weather.highCelsius}`,
      icon: thermometer_warmer,
      alt: 'Maximum Temperature',
    },
    {
      label: 'Min Temperature',
      value: `${weather.lowCelsius}`,
      icon: thermometer_colder,
      alt: 'Minimum Temperature',
    },
    {
      label: 'Sunrise',
      value: `${weather.sunrise} || 'Missing data'`,
      icon: sunrise,
      alt: 'Sunrise',
    },
    {
      label: 'Sunset',
      value: `${weather.sunset} || 'Missing data'`,
      icon: sunset,
      alt: 'Sunset',
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  
  return (
    <div
      key={index}
      className='
                grid
                md:grid-cols-2
                parallax
                blur__card
                items-center
                justify-around
                py-[2rem]
                mt-8
                mx-8
      '>
      <div className='text-[2rem] col-span-2 text-center font-bold italic'>
        {weather.UTC}
      </div>
      {weatherItems.map((item, i) => (
        <div key={i} className='md:flex md:flex-col md:items-center'>
          <div key={i} className='w-[6rem] md:w-[8rem]'>
            <img
              src={item.icon}
              alt={item.alt}
              className='w-[100%] object-contain'
            />
          </div>
          {windowWidth > 767 && (
            <div className='text-[1.5rem] text-center text-orange-500'>{item.label}</div>
          )}
          <div className='text-[1.3rem] md:text-[2rem] text-center font-medium'>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.shape({
    dateSol: PropTypes.string.isRequired,
    UTC: PropTypes.string.isRequired,
    highCelsius: PropTypes.string.isRequired,
    lowCelsius: PropTypes.string.isRequired,
    pressure: PropTypes.string,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Weather = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  console.log("gold");

  useEffect(() => {
    const getweather = async () => {
      try {
        console.log("gold");
        const API_KEY = '3gdaS7EfzvN0wGfCVqKhm8atgymXVO7BSi2s0Hnq';
        const PRnewdata = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`);
        // const data = await fetch("api/scraper").then(res => res.json());
        const newdata = PRnewdata.data;
        console.log(newdata);
        setWeatherData(newdata);
        storeDataInLocalStorage(newdata); // Store the fresh data in localStorage
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    // First, try to get data from localStorage
    let weatherData;

    if (!weatherData) {
      // Data is not available or has expired, fetch it
      getweather();
    } else {
      // Data is available in localStorage, use it
      setWeatherData(newdata);
      setLoading(false);
    }
  }, []);


  return (
    <div className='text-white'>
      {loading ? (
        <div className='h-[80vh] flex justify-center items-center'>
          <video autoPlay loop src="/assets/astronaut.webm" className="mx-auto w-[50%] h-[50%]" />
        </div>
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
        </div>
      )}
    </div>
  );
};

export default Weather;
