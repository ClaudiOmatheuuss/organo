import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


function App() {
  const Times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9' 
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF' 
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: 'F0F8E2' 
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8' 
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5' 
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9' 
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF' 
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario />
      {Times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}
    </div>
  );
}//o atributo key ajuda o React à identificar o componente e saber quando renderizar ou não.

export default App;