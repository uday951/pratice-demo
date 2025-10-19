import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <img src="https://techstory.in/wp-content/uploads/2022/03/Blinkit.jpg" alt="Blinkit" />
          </div>
          <div className="location">
            <span>📍 Delivery in 8 minutes</span>
            <p>New Delhi, Delhi, India</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder='Search "butter"' />
            <button>🔍</button>
          </div>
          <button className="login-btn">Login</button>
          <div className="cart">🛒 My Cart</div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>India's last minute app</h1>
            <h2>Get groceries, medicines, pet supplies & gifts delivered in minutes</h2>
            <div className="download-section">
              <h3>Download the app</h3>
              <div className="app-buttons">
                <img src="https://techstory.in/wp-content/uploads/2022/03/Blinkit.jpg" alt="Play Store" />
                <img src="https://techstory.in/wp-content/uploads/2022/03/Blinkit.jpg" alt="App Store" />
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://techstory.in/wp-content/uploads/2022/03/Blinkit.jpg" alt="Blinkit delivery" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;