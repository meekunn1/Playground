import React, { useState, useEffect } from "react";
import profile from "../../assets/steelOptions"

function Steel() {
const typeSelection = function(choice) {
  return <option>{choice}</option>
}

  const list = [];
  const [inputState, setInputState] = useState({
    typeWidth: "",
    typeHeight: "",
    typeThickness: "",
    length: "",
    quantity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //placeholder
    const { name } = event.target;
    setInputState({
      ...inputState,
      [name]: "",
    });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Type</label>
          <input
            type='text'
            name='typeWidth'
            onChange={handleChange}
            required
          />
          x
          <input
            type='integer'
            name='typeHeight'
            onChange={handleChange}
            required
          />
          x
          <input
            type='text'
            name='typeThickness'
            onChange={handleChange}
            required
          />
          t
          <input
            type='integer'
            name='length'
            onChange={handleChange}
            required
          />
          <input
            type='number'
            name='quantity'
            onChange={handleChange}
            required
          />
          <select>
{profile.map(typeSelection)}
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Steel;
