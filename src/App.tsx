import './styles/main.css';
import Card from './assets/image.svg';
import Logo from './assets/logo.svg';
const App = () => {
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
        <input type='text' placeholder='Your email' />
        <input type='password' placeholder='Password' />
        <button className='button'>Get started</button>

      </div>
    </div>
  );
};

export default App;
