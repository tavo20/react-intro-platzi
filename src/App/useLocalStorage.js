import React from 'react'

// hook del localStorage
function useLocalStorage(itemName, initialValue) {
    // const [ item, setItem ] = React.useState(initialValue);
    // const [loading, setLoading] = React.useState(true);
    // const [empty, setEmpty] = React.useState(false);
    // const [error, setError] = React.useState(false);

    const initialState = {
      item :initialValue,
      loading: true,
      empty: false,
      error: false
    }

    const [ state, dispatch ] = React.useReducer( reducer, initialState);

    console.log({state});
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          console.log('entra a setTime')
          let localStorageItem =  localStorage.getItem(itemName);
          let parsedTodos;
        
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue) ); 
            parsedTodos = [];
            // setEmpty(true);
            dispatch({ type: actionTypes.EMPTY, payload: true });
          } else {
            parsedTodos = JSON.parse(localStorageItem);
            if(parsedTodos && !parsedTodos.length) {
              // setEmpty(true);
              dispatch({ type: actionTypes.EMPTY, payload: true });
            }
          }
          // setItem(parsedTodos);
          dispatch({ type: actionTypes.ITEM, payload: parsedTodos });

          // setLoading(false)
          dispatch({ type: actionTypes.LOADING, payload: false });

        } catch(err) {
          // setError(err);
          dispatch({ type: actionTypes.ERROR, payload: err });

        }
  
      }, 1000)
    },[]);
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem) ); 
        // setItem(newItem);
        dispatch({ type: actionTypes.ITEM, payload: newItem });

        
      } catch (error) {
        // setError(error);
        dispatch({ type: actionTypes.ERROR, payload: error });

      
      }
  
    }
    return {
      item: state.item, 
      saveItem,
      loading: state.loading,
      error: state.error,
      empty: state.empty
    };
}

const actionTypes = {
  ITEM: [],
  LOADING: 'LOADING',
  EMPTY: 'EMPTY',
  ERROR: 'ERROR'
}
const reducerObject = (state, action) => ({
  [actionTypes.ITEM]: {
    ...state,
    item: action
  },
  [actionTypes.LOADING]: {
    ...state,
    loading: action
  },
  [actionTypes.EMPTY]: {
    ...state,
    empty: action
  },
  [actionTypes.ERROR]: {
    ...state,
    error: action
  },
})
function reducer(state, action) {
  if(reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state
  }
}



export { useLocalStorage };
  