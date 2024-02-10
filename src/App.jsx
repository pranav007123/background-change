
import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('');

  const changeColor = (color) => {
    setBgColor(color);
  };
  
  return (
    <div className='text-center justify-content-center m-5'>
      <div className='align-items-center justify-content-center ms-5 w-50' style={{ backgroundColor: bgColor }}>
        <h1 className='text-align-center justify-content-center p-5'>Background Color Change</h1>
        
        <div className=''>
          <Button className='btn btn-light m-5 rounded' onClick={() => changeColor('red')}style={{backgroundColor: "grey",color:"black"}}>Red</Button>
          <Button className='btn btn-light m-5 rounded' onClick={() => changeColor('blue')}style={{backgroundColor: "grey",color:"black"}}>blue</Button>
          <Button className='btn btn-light m-5 rounded' onClick={() => changeColor('green')}style={{backgroundColor: "grey",color:"black"}}>green</Button>
          
         
        </div>
      </div>
    </div>
  );
}

export default App;
