import axios from 'axios';

function Home() {
   const handelsubmit1=async(e)=>{
    const api="http://localhost:8000/home";
    const res=await axios.get(api);
    alert(res.data); 
  }
   const handelsubmit2=async(e)=>{
    const api="http://localhost:8000/about";
    const res=await axios.get(api);
    alert(res.data); 
  }
  return (<>
  <h1>Home Page</h1>
  <hr/>
  <button className='border mx-5 my-5 ' onClick={handelsubmit1}>Home</button>
  <button className='border mx-5 my-5 ' onClick={handelsubmit2}>About</button>
  
  </>
  )
}

export default Home