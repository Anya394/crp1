import { useState } from 'react';

const InputForm = ({ onAdd }: any) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default InputForm;