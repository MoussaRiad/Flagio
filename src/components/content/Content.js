import React, { useContext, useEffect, useMemo, useState } from 'react'
import DataContext from '../../Context/DataContext'
import CountryBox from './CountryBox'
import './Content.css'
export default function Content() {
    const {countries} = useContext(DataContext)
    const [list,setList]=useState([])
    useEffect(()=> setList(countries.map((country,index)=>{
    // <p index={index}>{country.cca2}</p>
        // console.log()
        return <CountryBox data={country} index={index}/>
    }
    ))
    ,[countries])
  return (
    <div className='countries-content'>
        {list}
    </div>
  )
}
