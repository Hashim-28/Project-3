
const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores officia ut laudantium non vitae ex unde optio, porro cum, maxime saepe. Porro voluptatibus, inventore illo veritatis minima ad dolorum totam.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/img/facebook.png" alt="fa-logo" />
              <img src="/img/instagram.png" alt="insta-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/home bg.jpg" alt="home bg" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;
  