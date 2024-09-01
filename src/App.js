import logo from './logo.svg';
import './App.css';
import Business from './components/business';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  return (
    <div>
      <h1>Ravenous Test</h1>
      <Business />
    </div>
  );
}

export default App;
