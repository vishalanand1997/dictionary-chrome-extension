import { Vocab } from './vocabListing';
import './App.css';
// import React, { useState, useRef } from 'react';

function App() {
  let random = Math.floor(Math.random() * Math.floor(Vocab.length));
  // const [copySuccess, setCopySuccess] = useState('');
  // const textAreaRef = useRef(null);
  // const [textValue, setTextValue] = useState('')
  // const copyToClipboard = (e) => {
  //   textAreaRef.current.select();
  //   document.execCommand('copy');
  //   // This is just personal preference.
  //   // I prefer to not show the whole text area selected.
  //   e.target.focus();
  //   setCopySuccess('Copied!');
  // };
  return (
    <div className="App">
      <h1>{Vocab[random].FIELD1}</h1>
      <h3>{Vocab[random].FIELD2}</h3>


    </div>
    //    <div>
    //     <form>
    //       <textarea
    //         ref={textAreaRef}
    //         value={textValue}
    //         onChange={(e) => { setTextValue(e.target.value) }}
    //         placeholder='Enter text and copy the whole text!!!'
    //       />
    //     </form>
    //     {
    //       document.queryCommandSupported('copy') &&
    //       <div>
    //         <button onClick={copyToClipboard}>Copy</button>
    //         <p>{copySuccess}</p>
    //       </div>
    //     }
    //   </div>
    // </div> 
  );
}

export default App;
