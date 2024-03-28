
import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {
  // console.log('Log 1');
  // React.useEffect(() => { console.log('Loooooooog 2') }); // Esto encapsula una función que se ejecuta al finalizar antes de return
  // React.useEffect(() => { console.log('Loooooooog 2') }, []); // No escucha ningún cambio de estado así que solo se ejecuta una vez  al inicio
  // React.useEffect(() => { console.log('Loooooooog 2') }, [totalTodos]); // Escucha el estado totalTodos, así que se ejecuta al inicio y cada vez que haya cambios de totalTodos
  // console.log('Log 3');

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>);
}

export default App;