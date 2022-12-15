import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [title, setTitle] = useState("premier text");

  const handleBtn = () =>{
  
    if (title = "premier text")
    {
        setTitle("second text");
    }
    else
    {
        setTitle("premier text");
    }

  }

  return(
    

    <React.Fragment>

<h2>{title}</h2>
<button type='button' className='btn' onClick={handleBtn} ></button>

    </React.Fragment>
    
    )
};

export default UseStateBasics;
