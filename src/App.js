import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import LifeCycleExample from './components/pure/lifeCycleExample';
import Greetingstyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Greeting name="Juanma"></Greeting> */}
        {/* <GreetingF name="Juanma"></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Martin">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <LifeCycleExample></LifeCycleExample> */}
        {/* <Greetingstyled name="Juanma"></Greetingstyled> */}
        {/* <Father></Father> */}
      {/* </header> */}
    </div>
  );
}

export default App;
