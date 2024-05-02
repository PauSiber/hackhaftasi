import './App.css';
import Awards from './components/awards/Awards';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Infos from './components/infos/Infos';
import Jury from './components/jury/Jury';
import Sponsor from './components/sponsor/Sponsor';
import Tiny from './components/tiny/Tiny';
import Footer from './components/footer/Footer';
import Map from './components/map/Map';
import Calendar from './components/calendar/Calendar';
import Background from './components/Background';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Infos />
      <Awards />
      <Jury />
      <Sponsor />
      <Tiny />
      <Map />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
