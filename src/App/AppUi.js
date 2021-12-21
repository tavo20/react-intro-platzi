
import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

export default function AppUi({
}) {

   const {            
    error,
    loading, 
    searchTodos,
    completeTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    empty
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch  />

            {/* <TodoContext.Consumer>
                {({ 
       
                }) => ( */}
                <TodoList>
                    {error && <p>Ocurrio un error</p>}
                    {loading && <p>Estamos cargando</p>}
                    {empty && <p>No tienes TODOs</p>}
                    {!loading && !searchTodos.length && <p>Crea tu primer TODO</p>}

                    {searchTodos.map(todo => (
                        <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                        />
                    ))}
                </TodoList>
                {/* )} */}
            {/* </TodoContext.Consumer> */}

            {openModal && (
                <Modal>
                        <TodoForm/>
                </Modal>  
            )}

            <CreateTodoButton 
             setOpenModal={setOpenModal}
             />
      </React.Fragment>
    )
}

export { AppUi };
