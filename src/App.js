import React, { useRef } from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import CardList from './components/CardList/index';
import { API_URL } from './utils/constants';


function App() {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  const abortController = useRef(null)

  useEffect(() => {
    abortController.current = new AbortController();

    if(!inputValue){
        return
    }
    
    fetch(API_URL, {
        signal: abortController.current.signal
      })
        .then(response => response.json())
        .then(json =>{ 
            setData(json)
        })
        .catch((err)=>{
            console.log(err)
        })
  }, [inputValue])

  const canselRequest = () => abortController.current && abortController.current.abort();

  const changeHandler = (e) =>{
      canselRequest();
      setInputValue(e.target.value)
  }

  return (
    <div className="App">
      <TextField  changeHandler={changeHandler} placeholder='Enter title'/>
      <CardList data={data}/>
    </div>
  );
}

export default App;
