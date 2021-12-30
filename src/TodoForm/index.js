import React from 'react'

export default function TodoForm({ 
    addTodo,
    setOpenModal
}) {
    const [ newTodoValue , setNewTodoValue ] = React.useState('');


    const onCancel = ( )=> {
        // TODO
    setOpenModal(prevState => !prevState);

    } 
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        onCancel();
    }
    return (
        <form onSubmit={onSubmit}> 
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ejemplo de TODOs"/>

            <div>
                <button
                type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button 
                    type="submit">
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };
