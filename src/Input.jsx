import React, { useContext, useState } from 'react';
import { MyContext } from './App';

const Input = () => {
  const { dispatch } = useContext(MyContext);
  const [formData, setFormData] = useState({ Name: "", Age: "", Email: "" });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSave = () => {
    dispatch({ type: 'ADD_DATA', payload: formData });
    setFormData({ Name: "", Age: "", Email: "" });
  };

  return (
    <>
      <h2>Input Component</h2>
      <p>Show your input content here</p>
      <label>Name:</label>
      <input type="text" name="Name" value={formData.Name} onChange={handleChange} /><br /><br />
      <label>Age:</label>
      <input type="text" name="Age" value={formData.Age} onChange={handleChange} /><br /><br />
      <label>Email:</label>
      <input type="text" name="Email" value={formData.Email} onChange={handleChange} /><br /><br />
      <input type="button" value="Save" onClick={handleSave} />
    </>
  );
}

export default Input;
