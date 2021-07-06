import './App.css';
import Navbar from './Navbar'
import FlightLog from './FlightLog'
import {FlightProvider} from './FlightContext'
import AddFlight from './AddFlight';

function App() {
  return (
  <FlightProvider>
    <div className="App">
      <Navbar />
      <FlightLog/>
      <AddFlight/>
    </div>
  </FlightProvider>
  );
}

export default App;
