import './App.css';
import Navbar from './Navbar'
import FlightLog from './FlightLog'
import {FlightProvider} from './FlightContext'
import AddFlight from './AddFlight';
import Footer from './Footer'
import Logo from './Logo'

function App() {
  return (
  <FlightProvider>
    <div className="App">
      <Navbar />
      <Logo/>
      <FlightLog/>
      <AddFlight/>
      <Footer/>
    </div>
  </FlightProvider>
  );
}

export default App;
