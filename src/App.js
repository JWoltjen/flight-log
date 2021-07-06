import './App.css';
import Navbar from './Navbar'
import FlightLog from './FlightLog'
import {FlightProvider} from './FlightContext'

function App() {
  return (
  <FlightProvider>
    <div className="App">
      <Navbar />
      <FlightLog/>
    </div>
  </FlightProvider>
  );
}

export default App;
