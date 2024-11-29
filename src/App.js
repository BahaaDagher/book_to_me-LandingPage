import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import WhoAreWe from './components/WhoAreWe';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Questions from './components/Questions';
import Feedback from './components/Feedback';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Info/>
      <Navbar/>
      <Main/>
      <WhoAreWe/>
      <Features1/>
      <Features2/>
      <Questions/>
      <Feedback/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
