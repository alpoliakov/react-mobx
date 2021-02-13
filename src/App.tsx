import React from 'react';
import './App.css';
import Button from './components/Button';
import { StoreProvider } from './stores';
import Text from './components/Text';
import Counter from './components/Counter';

const App = () => {
  return (
    <StoreProvider>
      <div className="App">
        <Text />
        <Counter />
        <Button />
      </div>
    </StoreProvider>
  );
};

export default App;
