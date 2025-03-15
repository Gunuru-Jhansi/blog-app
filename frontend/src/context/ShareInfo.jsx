import React from 'react';

// Create a context with a default value (optional)
const MyContext = React.createContext('default value');
const MyContextProvider = ({ children }) => {
    const [state, setState] = useState('Hello, Context!');
    
    return (
      <MyContext.Provider value={{ state, setState }}>
        {children}
      </MyContext.Provider>
    );
  };
  