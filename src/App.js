import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1>Feeling Hungry?</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
