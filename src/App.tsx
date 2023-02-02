import React, { useState } from 'react';

interface PeriodicTable {
  [key: string]: string;
}

const periodicTable: PeriodicTable = {
  'H': 'Hydrogen',
  'He': 'Helium',
  'Li': 'Lithium',
  'Na': 'Sodium'
};

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const inputArray = input.split(' ');
    let outputArray: any = [];
    let isPossible = true;

    inputArray.forEach(input => {
      if (periodicTable[input]) {
        outputArray.push(input);
      } else {
        isPossible = false;
      }
    });

    setOutput(isPossible ? outputArray.join(' ') : 'Not possible');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Convert</button>
      </form>
      <div>{output}</div>
    </div>
  );
};

export default App;
