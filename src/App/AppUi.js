
import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

export default function AppUi({

}) {
    return (
        <React.Fragment>
            <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
            />
            <TodoSearch 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
            />
    
            <TodoList>
            {error && <p>Ocurrio un error</p>}
            {loading && <p>Estamos cargando</p>}
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
    
            <CreateTodoButton />
      </React.Fragment>
    )
}

export { AppUi };
