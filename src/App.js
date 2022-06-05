
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
      <Experience></Experience>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}

export default App;
