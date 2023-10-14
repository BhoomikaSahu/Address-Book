import EntryForm from './components/EntryForm/EntryForm';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Table />
      <EntryForm /> 
    </div>
  );
}

export default App;
