import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="DevOps"/>
    </div>
  );
}

export default App;