import styles from "./Country.module.scss";
import className from "classnames/bind";

import {Link} from "react-router-dom"
import CountryInfo from "../CountryInfo/CountryInfo";
const cx = className.bind(styles);
function Country({country, onClick, isLight}) {
    
  return (
    <div  onClick={onClick}  className={isLight ? cx("country",'light-element','light-border'): cx("country")}>
      <div className={cx("flag")}>
        <img className={cx("flag-img")} src={country.flags.png} />
      </div>
      <div className={cx("country-info")}>
        <h3 className={cx("country-name")}>{country.name}</h3>
        <p>Population: <span>{country.population}</span> </p>
        <p> Region: <span> {country.region}</span></p>
        <p> Capital: <span>{country.capital}</span> </p>
      </div>
    </div>
  );
}

export default Country;
