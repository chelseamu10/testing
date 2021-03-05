import userEvent from '@testing-library/user-event';
import React,{useRef, useState} from 'react';

interface Props{
    title: string;
    name: string;
    age: number;
}


const FileExample: React.FC<Props> = ({
    title,
    name,
    age
}) => {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) : void | number=>{
        console.log(e.target.value);
        
        return 1;
    }
    
    const [introduce, setIntroduce] = useState<string>('Hello this is a my introduct');
   
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const onButtonClick = ()=>{
       
    }
    return (
        <div ref={divRef}>
             <input ref={inputRef} style={{width:`500px`}} onChange={(e)=>onChange(e)}/>
            {introduce}
            title: {title},
            Hi, My name is {name} and {age} years old
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    );
}

export default FileExample;