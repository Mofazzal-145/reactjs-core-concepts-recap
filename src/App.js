import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <District name= 'Thakurgaon' special='vegetable'></District>
     <District name= 'Baliadangi' special='maramari'></District>
     <District name= 'Dhaka' special='playboy'></District>
    </div>
  );
}
const districtStyle = {
  backgroundColor: 'yellow',
  margin : '14px',
  padding: '12px',
  borderRadius: '15px'
}

function District (props) {
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Special: {props.special}</p>
    </div>
  )
}

export default App;
