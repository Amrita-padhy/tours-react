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
const removeTour =(id)=>{
  const newTours = tours.filter((tour)=> tour.id !== id);
  setTours(newTours)
}


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
  if (tours.length=== 0) {
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className='refresh' onClick={()=>fetchTours()}>refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
