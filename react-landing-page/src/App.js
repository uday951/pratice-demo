import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero">
        <h1>Welcome to Our Landing Page</h1>
        <p>Build amazing things with React</p>
        <button className="cta-button">Get Started</button>
      </header>
      
      <section className="features">
        <div className="feature">
          <h3>Fast</h3>
          <p>Lightning fast performance</p>
        </div>
        <div className="feature">
          <h3>Modern</h3>
          <p>Built with latest technologies</p>
        </div>
        <div className="feature">
          <h3>Reliable</h3>
          <p>Trusted by thousands</p>
        </div>
      </section>
    </div>
  );
}

export default App;
