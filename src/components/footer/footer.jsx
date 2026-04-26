import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const FooterContainer = ({ className }) => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('');
  //   const [icon, setIcon] = useState('');

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Izhevsk&lang=ru&units=metric&appid=b543bbcbcef034f68db93a9e1b26ed48'
    )
      .then((data) => data.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(main.temp);
        setWeather(weather[0].description);
        // setIcon(weather[0].icon);
      });
  }, []);

  return (
    <div className={className}>
      <div>workpost@gmail.com</div>
      <div>
        <div>
          {city}, {temperature} - градусов
        </div>
        <div>{weather}</div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  font-weight: bold;
  box-shadow: 0px -3px 20px grey;
`;
