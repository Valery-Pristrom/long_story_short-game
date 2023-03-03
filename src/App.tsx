import React from 'react';
import './App.scss';
import { Button } from './components/Button/Button';
import { IconQuit } from './components/Icon/IconQuit';
import { IconRightArrow } from './components/Icon/IconRightArrow';
import { IconRules } from './components/Icon/IconRules';
import { IconSuccess } from './components/Icon/IconSuccess';

function App() {
  return (
    <div className="App">
      <Button className='btn__settings' text='HELLO' icon={<IconRightArrow className='icon'/>}/>
      <IconRightArrow className='icon'/>
      <IconQuit className='icon'/>
      <IconRules className='icon'/>
      <IconSuccess/>
    </div>
  );
}

export default App;
