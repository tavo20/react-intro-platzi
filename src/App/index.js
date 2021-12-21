
import './App.css';
import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';


const defaultTodos = [
  {
    text: 'Cortar cebolla', completed: true 
  },
  {
    text: 'Otro curso about react', completed: false 
  },
  {
    text: 'Otro curso about react más avanzado', completed: true 
  },
]
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos) )   ;


function App() {
  
  return ([
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  ]
  );
}

export default App;


