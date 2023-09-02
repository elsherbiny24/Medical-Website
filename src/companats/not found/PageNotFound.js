import React from 'react';
import './pagenotfound.css';
import Banner from '../banner/Banner';
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs';
import eror from '../../aswets/373521121_1025105255162894_6696333759206829925_n.gif'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
    <Banner tittle='Page Not Found' smtittle='Page Not Found' />
    <div className='notfound'>
       <img src={eror} alt='' className='img'/>
        <h2>The Page you were looking for, couldn't be found.</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to='/' className='link'>Back To Home</Link>
    </div>
    </>
  )
}

export default PageNotFound