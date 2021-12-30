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

// function App(props) {
//   return (
//     <h1>{props.saludo}, {props.nombre}</h1>
//   );
// }


function withSaludo(WrapperdComponent) {
  // Tiene que retornar un componente de react
  return function WrapperdComponentWithSaludo(saludo) {
    // Saludo puede ser una url y aca hacemos el llamado con axios
    return  function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrapperdComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando a WrapperdComponent</p>
        </React.Fragment>
        )
    }
  }
}

const AppWithSaludo = withSaludo(App)('Hola wenas');



ReactDOM.render(
  <React.StrictMode>
    {/* <App saludo="Hola tavo"/> */}
    {/* <App>
      Holaaa oli
    </App> */}
  <App

  />
  {/* <AppWithSaludo saludo="hey" nombre="Amor"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.createPortal(
  <App/>,
  document.getElementById('modal')
)


