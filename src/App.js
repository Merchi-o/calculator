import React from 'react';
import { useState } from 'react';
import './App.css';
import Title from './Components/title';
import Button from './Components/button';
import Screen from './Components/screen';
import ClearButton from './Components/clear-button';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const addInput= val => {
  setInput(input => input + val);
};

const calculateResult = () => {
  if (input !== "" && (input.startsWith("undefined") === false) && 
      (input.startsWith("+") === false) && (input.startsWith("*") === false) 
      && (input.startsWith("/") === false)) {
    setInput(evaluate(input));
     }  else {
      setInput("");
      alert("Clic on a number first, please.");
};
};

  return (
    <><div className='div-title'>
      <Title className='title-container' />
    </div>
    <div className="App">
        <div className='calculator-container'>
          <Screen input={input} />
          <div className='row'>
            <Button doClic={addInput}>1</Button>
            <Button doClic={addInput}>2</Button>
            <Button doClic={addInput}>3</Button>
            <Button doClic={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button doClic={addInput}>4</Button>
            <Button doClic={addInput}>5</Button>
            <Button doClic={addInput}>6</Button>
            <Button doClic={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button doClic={addInput}>7</Button>
            <Button doClic={addInput}>8</Button>
            <Button doClic={addInput}>9</Button>
            <Button doClic={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button doClic={calculateResult}>=</Button>
            <Button doClic={addInput}>0</Button>
            <Button doClic={addInput}>.</Button>
            <Button doClic={addInput}>/</Button>
          </div>
          <div className='row'>
            <ClearButton doClic={() => setInput("")}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div></>
  );
}

export default App;
