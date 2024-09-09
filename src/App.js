import Styles from "./App.module.css";
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <h1 className={Styles.title}>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
