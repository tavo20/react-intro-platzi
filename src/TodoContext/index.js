import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();
// const { Consumer, Provider} = React.createContext();


export default function TodoProvider(props) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  // const [ nombre, saveNombre ] = useLocalStorage('nombre', 'Tavo');

  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];
  console.log('PADRE', searchValue);
  if(!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const  completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const  deleteTodos = (text) => {
    console.log('dele', text)
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

  }


  // React.useEffect(() => {
  //   console.log('use effect');
  // }, totalTodos)

  // console.log('render luego useEffect');




    return (
    <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completeTodos,
        deleteTodos,
    }}>
        {props.children}
    </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

{/* <TodoContext.Consumer></TodoContext.Consumer> */}
