
import React,{useRef,useState,useEffect} from 'react';
import GoogleMap from './GoogleMap';
import FileExample from './FileExample';

import {loadMapAPI} from './utils/GoogleMapUtil';
import MAP from './Map';
import UseRedux from './UseRedux';
import { useDispatch, useSelector } from 'react-redux';
import {noteState} from './redux/NoteReducer';
// import Autocomplete from 'react-google-autocomplete';
//props
//hooks
//render props
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const App= () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  // useEffect(() => {
  //   const googleMapScript = loadMapAPI();
  //   googleMapScript?.addEventListener('load',()=>{
  //     setScriptLoaded(true);
  //   })
    
  // }, []);
  //   import React from 'react'
  // import { useSelector } from 'react-redux'
  // import { RootState } from './store'

  // export const CounterComponent = () => {
  //   const counter = useSelector((state: RootState) => state.counter)
  //   return <div>{counter}</div>
  // }
  const notes = useSelector<noteState,noteState["notes"]>((state)=>state.notes)
  const dispatch = useDispatch();
  
  const addNote = (note:string)=>{
    dispatch({
      type:"ADD_NOTE",
      payload:note
    })
  }
  const onChange = (e:any)=>{

  }
  return (
    <div>
      <UseRedux addNode={addNote}/>
      {/* <GoogleMap mapType ={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} /> */}
      <hr/>
      <ul>
        {notes.map((value,key)=>{
          return <li key={key}>{value}</li>
        })}
        
      </ul>
    </div>
  );

}

export default App;

