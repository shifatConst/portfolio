import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe./ContactMe';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Particles 
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900
            }            
          },
          shape: {
            type: "square",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}
      />
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
