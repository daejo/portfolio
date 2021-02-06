import './App.css';
import Home from './pages/Home'
import djIcon from './images/dj-icon.svg';

function App() {
  return (
    <div className="App">
      <Home/>
      <img src= {djIcon} className="logoFocus"/>
    </div>
  );
}

export default App;
