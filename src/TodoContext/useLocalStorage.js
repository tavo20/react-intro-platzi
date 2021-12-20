import React from 'react'

// hook del localStorage
function useLocalStorage(itemName, initialValue) {
    const [ item, setItem ] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          console.log('entra a setTime')
          let localStorageItem =  localStorage.getItem(itemName);
          let parsedTodos;
        
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue) ); 
            parsedTodos = [];
          } else {
            parsedTodos = JSON.parse(localStorageItem)
          }
          setItem(parsedTodos);
          setLoading(false)
        } catch(err) {
          setError(err);
        }
  
      }, 1000)
    },[]);
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem) ); 
        setItem(newItem);
        
      } catch (error) {
        setError(error);
        
      }
  
    }
    return {
      item, 
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage };
  