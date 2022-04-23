import React ,{useState,useEffect} from 'react';
import './App.css';
import Loading from './loading';
import Tours from './Tours';
// url
const url ='https://course-api.com/react-tours-project'



function App() {
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])
// function
const fetchTours = async () => {
  
  try {
    const response = await fetch(url)
  const tours = await response.json();
  setLoading(false)
  setTours(tours)
  console.log(tours);
  } catch (error) {
  setLoading(false)
  console.log(error);
  }
}
// useefect
 useEffect(()=> {
  fetchTours()
 },[])


  if (loading) {
    return <main>
      <Loading />
    </main>
  }
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
}

export default App;
