import "./index.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-overlay"></div>
      <img
        src="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/11/02114003/whiskey-cocktails-2-1600x900.jpeg"
        alt="hero image"
        className="hero-img"
      />
      <div className="hero-text">
        <h1> Cocktails</h1>
        <p>drink responsibly</p>
      </div>
    </div>
  );
};
export default Hero;
