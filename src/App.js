import React,{createContext,useContext,useReducer, useState} from 'react';
import { reducer, initialState } from  './reducers/Usereducers'
import logo from './logo.svg';
import './App.css';
import Create from './components/CreateNote'
import AllNotes from './components/AllNotes'
export const userContext = createContext();

function App() {
const [chang,setChang]=useState(false)
const change=()=>{
  if(chang==false){
    setChang(true)
  }
  else{
    setChang(true)
  }
}


  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (

    <userContext.Provider value={{state,dispatch}}>
     
      <Create change={change}/>
      <AllNotes/>
      
    

    </userContext.Provider>
  );
}

export default App;
