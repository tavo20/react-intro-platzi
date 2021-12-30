
import './App.css';
import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { ChangeAletStorageListener } from '../ChangeAlert';



function App() {

  const {            
    error,
    loading, 
    searchTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    empty,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    } = useTodos();


  return (
    <React.Fragment>
        <TodoHeader loading={loading}>
            <TodoCounter 
                completedTodos={completedTodos}
                totalTodos={totalTodos}
                // loading={loading}
                ></TodoCounter>
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                // loading={loading}
            ></TodoSearch>
        </TodoHeader>

        {/* <TodoContext.Consumer>
            {({ 
   
            }) => ( */}
            <TodoList
              error={error}
              loading={loading}
              searchTodos={searchTodos}
              totalTodos={totalTodos}
              onError={<p>Ocurrio un error props</p>}
              onLoading={<p>Estamos cargando</p>}
              onEmpty={<p>No tienes TODOs</p>}
              onEmptySearchResults={<p>No tienes resultados de {searchValue}</p>}
            //   render={todo => (
            //     <TodoItem
            //       key={todo.text}
            //       text={todo.text}
            //       completed={todo.completed}
            //       onComplete={() => completeTodos(todo.text)}
            //       onDelete={() => deleteTodos(todo.text)}
            //     />
            // ) }
            >
              {
                todo => (
                      <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                      />
                  ) 
              }
            </TodoList>

            {/* <TodoList> */}
                {/* {error && <p>Ocurrio un error</p>}
                {loading && <p>Estamos cargando</p>}
                {empty && <p>No tienes TODOs</p>}
                {!loading && !searchTodos.length && <p>Crea tu primer TODO</p>} */}

                {/* {searchTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodos(todo.text)}
                      onDelete={() => deleteTodos(todo.text)}
                    />
                ))} */}
            {/* </TodoList> */}
            {/* )} */}
        {/* </TodoContext.Consumer> */}

        {openModal && (
            <Modal>
                    <TodoForm 
                      setOpenModal={setOpenModal}
                      addTodo={addTodo}
                    />
            </Modal>  
        )}

        <CreateTodoButton 
         setOpenModal={setOpenModal}
         />

         <ChangeAletStorageListener/>

         <p>hola</p>
  </React.Fragment>
)
  
  // return ([
  //   <TodoProvider>
  //     <AppUi />
  //   </TodoProvider>
  // ]
  // );
}

export default App;


