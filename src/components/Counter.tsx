import { useObserver } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { StoreContext } from '../stores';

const Counter = () => {
  const store = useContext(StoreContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => (
    <div>
      <h1>{store.count}</h1>
    </div>
  ));
};

export default Counter;
