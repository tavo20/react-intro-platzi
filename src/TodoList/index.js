import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunct = props.children || props.render;

  return (
      <section className="TodoList-container">
        {props.error && props.onError}
        {props.loading && props.onLoading}
        {!props.loading && !props.searchTodos?.length && !props.totalTodos && props.onEmpty}

        {(props.totalTodos &&  !props.searchTodos?.length) && props.onEmptySearchResults}


        {props.searchTodos.map(renderFunct)}

        {/* <ul>
          {props.children}
        </ul> */}
      </section>
    );
  }
  
export { TodoList };

