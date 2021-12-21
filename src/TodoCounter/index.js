import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter({ total, completed }) {

  // const { total, completed } = props;
    return (
      <React.Fragment>
        <TodoContext.Consumer>
          {({completedTodos, totalTodos}) => (
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
          )}
        </TodoContext.Consumer>
         {/* <div></div> */}

      </React.Fragment>


    );
  }

export { TodoCounter };
