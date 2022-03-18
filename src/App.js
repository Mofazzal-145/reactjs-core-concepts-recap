import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <District name= 'Thakurgaon' special='vegetable' ></District>
     <District name= 'Baliadangi' special='maramari'></District>
     <District name= 'Dhaka' special='playboy'></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'lightblue',
  margin : '14px',
  padding: '12px',
  borderRadius: '15px'
}

function District (props) {
//
const [power, setPower] = useState(1)
const boostPower = () => {
  const newPower = power * 2;
  setPower(newPower);
}

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Special: {props.special}</p>
  
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

export default App;
