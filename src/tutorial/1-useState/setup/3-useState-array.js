import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = useState(data)

  const removeItem = (id) => {


    setPeople(people.filter((personne) => personne.id !== id))

  }

  return (
    <>

      {people.map((persone, key) => {

        const { id, name } = persone;
        return (
          <div key={id} className="item">
            <h4> {name} </h4>
            <button type='button' className='btn' onClick={() => removeItem(id)} >Remove</button>
          </div>

        )

      })}

      {/* <button type='button' className='btn' onClick={()=> setPeople()}> click here to hide all </button> */}


    </>

  )
};

export default UseStateArray;
