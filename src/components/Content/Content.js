import styles from './Content.module.scss';
import className from 'classnames/bind'
import {BsSearch} from 'react-icons/bs'
import {useState, useEffect, Fragment} from 'react'

import Country from '../Country/Country'
import CountryInfo from '../CountryInfo/CountryInfo'
import { Link } from 'react-router-dom';

const cx = className.bind(styles)

function Content({isLight}) {
    const [searchInput, setSearchInput] = useState('')
    const [isSearchInput, setIsSearchInput] = useState(false)
    const [countryApi, setCountryApi] = useState([])
    const [isInfo, setIsInfo] = useState(false)
    const [ isRegion, setIsRegion] = useState(false)
    const [ isCode, setIsCode] = useState(false)

    const getCode = ((code) => {
        setSearchInput(code)
    })
    
    const backHome = (() => {
        setSearchInput('')  
        setIsInfo(false)
        setIsCode(false)
    })

    
    
    let api = ``
    useEffect(() => { 
        if(isSearchInput){
            api = `https://restcountries.com/v2/name/${searchInput}`
        }
        if(searchInput==='') {
            api = `https://restcountries.com/v2/all`
        }
        if(isRegion) {
            api = `https://restcountries.com/v2/region/${searchInput}`
        }
        if(isCode) {
            api = `https://restcountries.com/v2/alpha?codes=${searchInput}`
        }
        fetch(api)
        .then(response => response.json())
        .then(data => setCountryApi(data))
    },[searchInput, api])
    return ( 
        
        <Fragment>
            {!isInfo ?
            <div className={isLight? cx('content','light-background') : cx('content')}>
                <div className={isLight? cx('search','light-background') : cx('search')}>
                    <div className={isLight? cx('search-input','light-element') : cx('search-input')}>
                        <BsSearch/>
                        <input
                            className={isLight? cx('input-light') : undefined}
                            value={searchInput}
                            placeholder='Search for a country'
                            onChange={(e) => {
                                setSearchInput(e.target.value)
                                setIsSearchInput(true)
                                setIsRegion(false)
                            }}
                        />
                    </div>
                    <select onChange={(e) => {
                        setSearchInput(e.target.value)
                        setIsRegion(true)
                        }} 
                        className={isLight? cx('region','light-element') : cx('region')}>
                        <option style={{display: 'none'}}>Filter by Region</option>
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>Americas</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
                </div>
    
                <div className={cx('countries')}>
                    {countryApi.length>=1 && countryApi.map((country,index) => {
                        return (
                                <Country onClick={() => {
                                    setSearchInput(country.alpha3Code)
                                    setIsInfo(true)
                                    setIsSearchInput(false)
                                    setIsCode(true)
                                    setIsRegion(false)
                                }} key={index} isLight={isLight} country={country} />
                        )
                    })}
                </div>
            </div>
            :
            <div className={isLight? cx('country-info','light-background') : cx('country-info')}>
                {countryApi.map((country,index) => {
                        return (
                            <CountryInfo 
                                isLight={isLight}
                                onClick={getCode} 
                                key={index} 
                                country={country} 
                                back={backHome}
                            />
                        )
                    })}
            </div>    
        }
        </Fragment>
            
     );
}

export default Content;