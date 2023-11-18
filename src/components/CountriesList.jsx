import styles from "./CountriesList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCitiesContext } from "../contexts/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) return <Spinner></Spinner>;
  if (cities.length === 0) return <Message message="No cities found"></Message>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
