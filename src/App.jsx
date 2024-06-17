import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  function addWeight(event){
    setWeight(event.target.value);
  }

  function addHeight(event){

    setHeight(event.target.value);
  }

  const calBMI = (event) => {

    event.preventDefault();

    if(weight == 0 || height == 0){

      alert('Please enter a valid weight and height');

    }
    else{

      const bmi = (weight / (height * height) * 10000).toFixed(2);
      setBmi(bmi);

      if(bmi < 18.5){

        setMessage('You are under-weight');
      }
      else if(bmi >= 18.5 && bmi <= 24.9){
        setMessage('You are healthy weight') 
      }
      else if(bmi >= 25 && bmi <= 29.9) {
        setMessage('You are over-weight');
      }
      else{
        setMessage('You have reached obesity');
      }
    }
  }

  function reload(){

    window.location.reload();
  }
  
  return(
    <div className='app'>
      <div className="container">
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calBMI}>
          <div>
            <label>Weight (kg) </label>
            <input value={weight} type='text' placeholder='Enter your weight' onChange={addWeight}></input>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} type='text' placeholder='Enter your height' onChange={addHeight}></input>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>

          <div className='center'>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )

}

export default App
