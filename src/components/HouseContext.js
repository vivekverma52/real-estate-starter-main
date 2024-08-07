import React, { useState, createContext } from 'react';

// importing data
import { housesData } from '../data';

// Create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const allCountries = housesData.map((house) => house.country);
  const allProperties = housesData.map((house) => house.type);
  const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
  const uniqueProperties = ['Property (any)', ...new Set(allProperties)];
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([...uniqueCountries]);
  const [property, setProperty] = useState('Property (any)');
  const [properties, setProperties] = useState([...uniqueProperties]);
  const [price, setPrice] = useState('Price range (any)');
  const [bedrooms, setBedrooms] = useState('No of bedrooms (any)');
  const [loading, setLoading] = useState(false);


  const handleClick = () => {

    //setloading
    setLoading(true);

   
    //creating a fucntions that checks if the string inclused '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

  // getting first values of price and  parse it to number
    const minPrice = parseInt(price.split(' ')[0]);

    // getting secons values of price which is the maximun price & parse it to number
    const maxPrice= parseInt(price.split(' ')[2]);
    // console.log(price.split(" "));
    // console.log(price);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        house.bedrooms === bedrooms
      ) {
        return true;
      }
    })

    console.log(newHouses);
   
     setTimeout(() => {
      setLoading(false);
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
    }, 1000);
  };

  
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        houses,
        bedrooms,
        setBedrooms,
        handleClick,
        loading
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;