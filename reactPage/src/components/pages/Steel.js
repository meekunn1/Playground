import React, { useState, useEffect } from "react";

function Steel() {
  const [inputState, setInputState] = useState({
    steelType: "",
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
            name='steelType'
            placeholder='input steel type'
            onChange={handleChange}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Steel;
