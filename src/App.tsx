import './styles/main.css';
import Card from './assets/image.svg';
import Logo from './assets/logo.svg';
import Google from './assets/google.svg';
import { useState } from 'react';
const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='container'>
      <div className='left-part '>
        <p className='text'>
          It's a project that allows you to send postcards and receive postcards
          back from random people around the world. That's real postcards, not
          electronic!
        </p>
        <div className='initial'> <p className='text2'>Learn more.</p></div>


        <img src={Card} alt='card' />

      </div>
      <div className='right-part'>
        <img src={Logo} alt='logo' className='logo' />
        <p className='title'>How have you been?</p>
        <div>
          <p className='input_title'>Login</p>
          <input type='text' placeholder='Email or phone number' className='input' />
        </div>

        <div>
          <p className='input_title'>Password</p>
          {isClicked ? (
            < input type='text' placeholder='Password' className='input' />

          ) : (
            <input type='password' placeholder='Password' className='input' />
          )
          }
        </div>

        <div className='checkboxDiv'>
          <input type='checkbox' className='checkbox' onClick={handleClick} />
          <p className='checkbox_text'>Show password</p>
        </div>


        <button className='buttonOne'>Get started</button>
        <button className='googleButton'>
          <img src={Google} alt='google' className='googleLogo' />
          Or sign in with Google</button>
        <div className='signupDiv'>
          <p className='signup' >Dont have an account?<p className='bold'>Sign up now </p> </p>
        </div>
      </div>

    </div>
  );
};

export default App;
