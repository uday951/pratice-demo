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
            <h1>hii</h1>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="category-item">
          <div className="category-icon">🍕</div>
          <h3>Food</h3>
          <p>Hot meals delivered</p>
        </div>
        <div className="category-item">
          <div className="category-icon">🛒</div>
          <h3>Groceries</h3>
          <p>Fresh produce & essentials</p>
        </div>
        <div className="category-item">
          <div className="category-icon">💊</div>
          <h3>Medicines</h3>
          <p>Health & wellness</p>
        </div>
        <div className="category-item">
          <div className="category-icon">🎁</div>
          <h3>Gifts</h3>
          <p>Special occasions</p>
        </div>
      </section>

      <section className="product-sections">
        <div className="product-section">
          <h2>🍕 Food Delivery</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/ff6b6b/fff?text=Pizza" alt="Pizza" />
              <h4>Pizza</h4>
              <p>₹299</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/4ecdc4/fff?text=Burger" alt="Burger" />
              <h4>Burger</h4>
              <p>₹199</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/45b7d1/fff?text=Biryani" alt="Biryani" />
              <h4>Biryani</h4>
              <p>₹349</p>
            </div>
          </div>
        </div>

        <div className="product-section">
          <h2>🛒 Groceries</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/96ceb4/fff?text=Fruits" alt="Fruits" />
              <h4>Fresh Fruits</h4>
              <p>₹150/kg</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/feca57/fff?text=Vegetables" alt="Vegetables" />
              <h4>Vegetables</h4>
              <p>₹80/kg</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/ff9ff3/fff?text=Dairy" alt="Dairy" />
              <h4>Dairy Products</h4>
              <p>₹60/L</p>
            </div>
          </div>
        </div>

        <div className="product-section">
          <h2>💊 Medicines</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/a55eea/fff?text=Vitamins" alt="Vitamins" />
              <h4>Vitamins</h4>
              <p>₹250</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/26de81/fff?text=First+Aid" alt="First Aid" />
              <h4>First Aid</h4>
              <p>₹180</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/fd79a8/fff?text=Wellness" alt="Wellness" />
              <h4>Wellness</h4>
              <p>₹320</p>
            </div>
          </div>
        </div>

        <div className="product-section">
          <h2>🎁 Gifts</h2>
          <div className="products">
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/f0932b/fff?text=Flowers" alt="Flowers" />
              <h4>Flowers</h4>
              <p>₹299</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/eb4d4b/fff?text=Cakes" alt="Cakes" />
              <h4>Cakes</h4>
              <p>₹599</p>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150x100/6c5ce7/fff?text=Chocolates" alt="Chocolates" />
              <h4>Chocolates</h4>
              <p>₹450</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;