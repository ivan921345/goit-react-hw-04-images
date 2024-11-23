import { useState } from 'react';

const AddNumberForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={onChange}
          value={name}
        />
      </div>
      <div className="number">
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          onChange={onChange}
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default AddNumberForm;
