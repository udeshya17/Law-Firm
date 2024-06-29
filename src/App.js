import './App.css';
import Home from '../src/components/Section/Home/Home'
import Attorneys from '../src/components/Section/Attorneys/Attorneys'
import Selection from '../src/components/Section/Selection/Selection'
import Practice from '../src/components/Section/Practice/Practice'



function App() {
  return (
    <div>
      <Home />
      <Attorneys />
      <Selection />
      <Practice />
    </div>
  );
}

export default App;
