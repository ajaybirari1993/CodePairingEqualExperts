import logo from './logo.svg';
import './App.css';

// Components
import {
  Header,
  ProductsList
} from './Components/ComponentIndex';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
    </div>
  );
}

export default App;
