import './App.css';
import Awards from './components/awards/Awards';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Infos from './components/infos/Infos';
import Sponsor from './components/sponsor/Sponsor';
// import Tiny from './components/tiny/Tiny';
import Footer from './components/footer/Footer';
import Map from './components/map/Map';
import Calendar from './components/calendar/Calendar';

function App() {
    return (
        <div className='App'>
            <div className='appContainer'>
                <Navbar />
                <Hero />
                <Infos />
                <Awards />
                {/* <Jury /> */}
                <Sponsor />
                <Calendar />
                {/*<Tiny />*/}
                <Map />
                <Footer />
            </div>
        </div>
    );
}

export default App;
