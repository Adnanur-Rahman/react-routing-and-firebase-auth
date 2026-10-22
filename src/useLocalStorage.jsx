import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(key);

    return savedData ? JSON.parse(savedData) : initialValue;
  });

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [data, saveData];
};

export default useLocalStorage;