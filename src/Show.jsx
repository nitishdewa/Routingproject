import React, { useContext } from 'react';
import { MyContext } from './App';
import './App.css';

const Show = () => {
  const { state, dispatch } = useContext(MyContext);

  const deldata = (index) => {
    dispatch({ type: 'REMOVE_DATA', payload: index });
  };

  return (
    <>
      <h2>Show Component</h2>
      <p>Here are the details you entered:</p>
      <ul>
        {state.map((record, index) => (
          <li key={index} className='box'>
            <p>Name: {record.Name}</p>
            <p>Age: {record.Age}</p>
            <p>Email: {record.Email}</p>
            <input type="button" value="X" onClick={() => deldata(index)} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Show;
