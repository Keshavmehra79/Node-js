import axios from 'axios';


const display1=async ()=>{
  const response=await axios.get('http://localhost:9000/home');
  console.log(response.data);
}


const display2=async ()=>{
  const response=await axios.post('http://localhost:9000/about',{name:"Keshav"})
  console.log(response);
}

const display3=async ()=>{
  const response=await axios.get('http://localhost:9000/service/?nm=mehra');
  console.log(response);
}
const App=()=>{
      return(
        <>
        <h1></h1>
        
        
        <button onClick={display1}>Get request</button>  <h1>        </h1>
        <button onClick={display2}>Post request</button>
        <button onClick={display3}>Get request2</button>
        </>
      )
}

export default App