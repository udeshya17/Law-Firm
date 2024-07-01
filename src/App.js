import './App.css';
import Home from '../src/components/Section/Home/Home'
import Attorneys from '../src/components/Section/Attorneys/Attorneys'
import Selection from '../src/components/Section/Selection/Selection'
import Practice from '../src/components/Section/Practice/Practice'
import Client from '../src/components/Section/Client/Client'
import Team from '../src/components/Section/Team/Team'
import Faq from '../src/components/Section/Faq/Faq'
import Box from '../src/components/Section/Box/Box'
import Footer from '../src/components/Section/Footer/Footer'




function App() {
  return (
    <div>
      <Home />
      <Attorneys />
      <Selection />
      <Practice />
      <Client />
      <Team />
      <Faq />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
