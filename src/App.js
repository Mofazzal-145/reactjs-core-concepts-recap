import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <LoadPosts></LoadPosts>

     <District name= 'Thakurgaon' special='vegetable' ></District>
     <District name= 'Baliadangi' special='maramari'></District>
     <District name= 'Dhaka' special='playboy'></District>
    </div>
  );
}
 // ex : 02
function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return (
    <div>
      <h1>Posts:{posts.length}</h1>
      {
        posts.map(post => <Post title= {post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props) {
  return (
    <div style={{backgroundColor:'lightseagreen', margin:'20px', padding:'20px', border: '4px solid yellow', borderRadius:'15px'}}>
      <h2>Title:{props.title}</h2>
      <p>Body:{props.body}</p>
    </div>
  )
}

// ex: 01
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
