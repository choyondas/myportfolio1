
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';

function App() {
  return (
    <div >
      <Header></Header>
      <Nav></Nav>
      <About></About>
      <Contact></Contact>
      <Experience></Experience>
      <Services></Services>
    </div>
  );
}

export default App;
