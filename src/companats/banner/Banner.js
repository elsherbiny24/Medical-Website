import React from 'react';
import './banner.css';
import { AiFillHome } from 'react-icons/ai';
const Banner = ({tittle , smtittle}) => {
  return (
    <>
    <div className='banner'>
        <h1>{tittle}</h1>
        <div className='icon'>
            <span className='span-1'><AiFillHome className='home-icon'/> Home / </span>
            <span>{smtittle}</span>
        </div>
    </div>
    </>
  )
}

export default Banner