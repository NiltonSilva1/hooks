import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(100);

  function dec() {
    setCounter(counter - 1);
  }

  function inc() {
    setCounter(counter + 1);
  }

  return [dec, inc, counter];
};
