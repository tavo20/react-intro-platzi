import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const e = React.createElement

// function App() {
//     <h1 id="title">
//       hellor wor
//     </h1>
//     // Este h1 es lo mismo que esta aca abajo
//   return (
//     React.createElement('h1', { id: 'title'}, 'Hello react')
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <App saludo="Hola tavo"/> */}
    {/* <App>
      Holaaa oli
    </App> */}
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App/>,
  document.getElementById('modal')
)


