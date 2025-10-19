import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Typing animation
    const phrases = ['Taste is Best', 'Quick Delivery', 'No Hungry'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.querySelector('.typing-text');
    
    function typeText() {
      if (!typingElement) return;
      
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
      
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(typeText, typingSpeed);
    }
    
    typeText();
    
    // Carousel animation
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    
    if (!track) return;
    
    const totalSlides = slides.length;
    
    function updateCarousel() {
      track.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    }
    
    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });
    
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    
    track.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      isDragging = false;
    });
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="nav-menu">
            <div className="nav-item-wrapper">
              <a href="#home" className="nav-item">🏠 Home</a>
              <div className="dropdown">
                <a href="#featured">⭐ Featured</a>
                <a href="#deals">🎉 Today's Deals</a>
                <a href="#new">🆕 New Arrivals</a>
              </div>
            </div>
            <div className="nav-item-wrapper">
              <a href="#contact" className="nav-item">📞 Contact</a>
              <div className="dropdown">
                <a href="#support">💬 Live Chat</a>
                <a href="#email">✉️ Email Us</a>
                <a href="#phone">📞 Call Us</a>
              </div>
            </div>
            <div className="nav-item-wrapper">
              <a href="#wishlist" className="nav-item">❤️ Wishlist</a>
              <div className="dropdown">
                <a href="#saved">💖 Saved Items</a>
                <a href="#favorites">⭐ Favorites</a>
                <a href="#share">🔗 Share List</a>
              </div>
            </div>
            <div className="nav-item-wrapper">
              <a href="#cart" className="nav-item">🛒 Cart</a>
              <div className="dropdown">
                <a href="#view-cart">👁️ View Cart</a>
                <a href="#checkout">💳 Checkout</a>
                <a href="#orders">📦 My Orders</a>
              </div>
            </div>
            <div className="nav-item-wrapper">
              <a href="#account" className="nav-item">👤 Account</a>
              <div className="dropdown">
                <a href="#profile">👤 My Profile</a>
                <a href="#addresses">📍 Addresses</a>
                <a href="#payments">💳 Payments</a>
                <a href="#logout">🚪 Logout</a>
              </div>
            </div>
          </div>
          <div className="delivery-animation">
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Delivery Scooter" className="delivery-gif" />
          </div>
        </div>
      </header>

      <section className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="https://cdn.pixabay.com/video/2022/11/09/138448-770264896_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <div className="hero-text">
            <h1>India's last minute app</h1>
            <div className="typing-container">
              <span className="typing-text"></span>
            </div>
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
            <div className="premium-carousel">
              <div className="carousel-container">
                <div className="carousel-track">
                  <div className="carousel-slide active">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop" alt="Pizza" />
                    <div className="slide-overlay">
                      <h3>Delicious Pizza</h3>
                      <p>Fresh & Hot</p>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop" alt="Burger" />
                    <div className="slide-overlay">
                      <h3>Juicy Burgers</h3>
                      <p>Grilled to Perfection</p>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600&h=400&fit=crop" alt="Biryani" />
                    <div className="slide-overlay">
                      <h3>Aromatic Biryani</h3>
                      <p>Traditional Flavors</p>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop" alt="Salad" />
                    <div className="slide-overlay">
                      <h3>Fresh Salads</h3>
                      <p>Healthy & Crisp</p>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop" alt="Pancakes" />
                    <div className="slide-overlay">
                      <h3>Fluffy Pancakes</h3>
                      <p>Sweet & Soft</p>
                    </div>
                  </div>
                  <div className="carousel-slide">
                    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop" alt="Sushi" />
                    <div className="slide-overlay">
                      <h3>Premium Sushi</h3>
                      <p>Authentic Japanese</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-nav">
                <button className="nav-btn prev-btn">‹</button>
                <button className="nav-btn next-btn">›</button>
              </div>
              <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about-section">
            <h3>🚀 QuickBite</h3>
            <p className="about-text">India's fastest delivery app bringing groceries, food, medicines & gifts to your doorstep in minutes. Experience the future of instant delivery.</p>
            <div className="social-icons">
              <a href="#instagram" className="social-icon">📷</a>
              <a href="#facebook" className="social-icon">👍</a>
              <a href="#twitter" className="social-icon">🐦</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partner">Partner With Us</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#track">Track Order</a></li>
              <li><a href="#refund">Refund Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>📞 +91 1800-123-4567</li>
              <li>✉️ support@quickbite.com</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 QuickBite. All rights reserved. | Delivering happiness in minutes ⚡</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
