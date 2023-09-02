import React, { useState } from 'react';
import Banner from '../banner/Banner';
import './formlog.css';
import { Container } from 'react-bootstrap';
import logo from '../../aswets/1.png03.png'


const FormLog = () => {
    const [Email , SetEmail] = useState();
    const [password, Setpassword] = useState();
    const [Error , SetError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Email || !Email.length || !password || !password.length) {
          SetError(true);
        }
      };
  return (
   <>
   <Banner tittle='Login|Register' smtittle='Login|Register'/>
   <section className='login'>
    <Container className='log-contant'>
        <div className='form-box shadow'>
            <div>
                <img src={logo} alt='' className='img'/>
                <form onSubmit={handleSubmit}>
    <div className='inputs'>
      <input type='email' placeholder='enter your email' onChange={e => SetEmail(e.target.value)}/>
      {Error && (!Email || Email.length <= 0) ? <p className='p-validate'>Email can’t be empty</p> : ''}
      <input type='password' placeholder='enter your password' onChange={e => Setpassword(e.target.value)}/>
      {Error && (!password || password.length <= 0) ? <p className='p-validate'>password can’t be empty</p> : ''}
      <button className='btn'>login</button>
    </div>
  </form>

            </div>
            <a href='#' className='link'>Forgot Password</a>
            <p className='p'>Don't have any account ?</p>
            <button className='btn-2'>Register</button>
        </div>
    </Container>
   </section>
   </>
  )
}

export default FormLog