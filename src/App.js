// import "./App.css";
import Styles from '../src/components/SearchBar.module.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>Feeling Hungry?</h1>
      <div><SearchBar /></div>
      <div><BusinessList /></div>
    </div>
  );
}

export default App;
