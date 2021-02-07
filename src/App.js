import './App.css';
import Home from './pages/Home';
import djLogo from './images/3dbigicon.png';
import { FadeInDownDiv } from './components/Animation';

function App() {
  return (
    <div className="App">
      <Home/>
      <FadeInDownDiv><img src= {djLogo} className="logoFocus"/></FadeInDownDiv><br/>
      <h1 className="djName">DAVID JOAQUIN</h1>
      <h12>Web Designer, Graphic Designer, Traveller, Artist</h12>
    </div>
  );
}

export default App;
