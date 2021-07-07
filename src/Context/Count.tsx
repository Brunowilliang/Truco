import React, { createContext, useState, useContext } from 'react';


interface ScoreContext {
  count: number;
  setCount: React.Dispatch<number>;
  result: number;
  setResult: React.Dispatch<number>;
  name: string;
  setName: React.Dispatch<string>;
}


export const ScoreContext = createContext<ScoreContext>({} as ScoreContext)

export const CountProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);
  const [name, setName] = useState('');

  return (
    <ScoreContext.Provider
      value={{
        count,
        setCount,
        result,
        setResult,
        name,
        setName
      }}>
      {children}
    </ScoreContext.Provider>
  )
}

export function useCount(){
  const context = useContext(ScoreContext);
  const { count, setCount, result, setResult, name, setName } = context;
  return { count, setCount, result, setResult, name, setName };
}