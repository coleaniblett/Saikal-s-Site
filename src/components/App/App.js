import logo from '../../logo.svg';
import './App.css';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Sidebar from '../Sidebar/Sidebar';
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <Sidebar />
      <Gallery />
      <About />
    </div>
  );
}

export default App;
