import './styles/main.css';
import Card from './assets/image.svg';
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
        <h2>teste</h2>
      </div>
    </div>
  );
};

export default App;
