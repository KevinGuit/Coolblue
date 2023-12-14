import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <section>
        <Hero/>
      </section>
      <section>
        <Slider/>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <div></div>
    </div>
  );
}

export default App;
