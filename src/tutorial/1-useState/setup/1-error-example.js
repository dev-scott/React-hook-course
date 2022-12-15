import React from 'react';

const ErrorExample = () => {

  let title = 'random title';

console.log(title);
  const handleClick =()=>{
  
    title = 'hello people';
    console.log(title);

  }

  return(
  <React.Fragment>

    <h2>{title}</h2>
    <button type='button' className='btn' onClick={handleClick}> click me to change the text </button>

  </React.Fragment>
  );

};

export default ErrorExample;
