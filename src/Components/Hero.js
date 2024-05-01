import "../App.css";

function Hero() {
  return (
    <section className="hero">
      <img src="./images/banner2.png" alt="Hero" />
      {/* <h1 className="hero--header">Online Experiences</h1> */}
      <div className="hero--text">
        <small>New Arrival</small>
        <h1 className="hero--header">Discover Our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>BUY NOW</button>
      </div>
    </section>
  );
}

export default Hero;
