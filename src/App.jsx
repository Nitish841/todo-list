import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodo from './components/AddTodo';
import ListItmes from './components/ListItems';

function App() {
  return (
    <center>
      <AddTodo />
      <ListItmes />
    </center>
  );
}

export default App;
