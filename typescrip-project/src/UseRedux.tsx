import React,{ChangeEvent, useState} from 'react';

interface newNoteProps{
    addNode(note:string):void;
}
const UseRedux:React.FC<newNoteProps> = ({addNode})=>{
    const [note,setNote] = React.useState("");
    const onChange=(e:ChangeEvent<HTMLInputElement>)=>{
        var value = e.target.value;
        setNote(value);
    }
    const AddNote = ()=>{
        addNode(note);
        setNote("");
    }
    return(
        <div>
            <input onChange={onChange} value={note} type="text" name="note" placeholder="note" />
            <button onClick={AddNote}>Add note</button>
        </div>
    )
}

export default UseRedux;