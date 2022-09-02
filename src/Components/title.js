import React from 'react';
import emoji from '../Images/emoji.png';

const Title = () => (
    <div className='title-container'>
      <h1 className='title-text'>My Calculator</h1>
        <img 
          src={emoji}
          className='emoji'
          alt='Smile Face :)' />
       </div>
);

export default Title;