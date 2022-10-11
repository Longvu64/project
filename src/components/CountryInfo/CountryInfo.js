import styles from './CountryInfo.module.scss';
import className from 'classnames/bind'
import {Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
const cx = className.bind(styles)

function CountryInfo({country, onClick, back, isLight}) {
    
    return ( 
        <Fragment>
            <div onClick={() => {back()}} className={isLight? cx('back','light-element') : cx('back')}>Back</div>
            <div className={cx('flag')}>
               <img src={country.flags.png} alt={'flag'}/>
            </div>
            <div className={cx('country-info-wrapper')}>
                <h3>{country.name}</h3>
                <div className={cx('country-info')}>
                    <div>
                        <p>Native Name: <span>{country.nativeName}</span></p>
                        <p>Population: <span>{country.population}</span></p>
                        <p>Region: <span>{country.region}</span></p>
                        <p>Sub Region: <span>{country.subregion}</span></p>
                    </div>
                    <div>
                        <p>Capital: <span>{country.capital}</span></p>
                        <p>Top Level Domain: <span>{country.topLevelDomain}</span></p>
                        <p>Currencies: {country.currencies?.map((item,id) => <span key={id}>{item.code}</span>)}</p>
                        <p>Languages: {country.languages?.map((item,id) => <span key={id}>{item.name}</span>)}</p>
                    </div>
                </div>
                <div className={cx('border')}>
                    <p className={cx('border-code-wrapper')}>Border Countries: 
                        {country.borders?.map((item) =>  <span 
                        className={isLight? cx('border-code','light-element') : cx('border-code')}
                        onClick={() => onClick(item)} key={item}>{item}</span>)}

                    </p>

                </div>
            </div>
        </Fragment>
     );
}



export default CountryInfo;