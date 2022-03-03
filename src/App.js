import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import Cards from './components/cards/index';

function App() {
  const [data, setData] = useState([])

  useEffect(() =>{
    fetch('/getdata')
    .then(res => res.json())
    .then((data) => {
      setData(data)
    })
  },[])


  
  return (
    <div className='container'>
      <div className='grid'>
        
        {data.map((i, key) => (
            <Cards 
              Title={i.ettitle}
              Category= {i.etcat}
              Date= {i.etdate}
              Location= {i.etlocation}
              Img= { `/images/${i.etimg}.jpg`}
            /> 
        ))}

      </div>
    </div>
  );
}

export default App;
