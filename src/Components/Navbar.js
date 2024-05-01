import "../App.css";
function Navbar() {
  return (
    <nav>
      <img src="/images/logo3.png" alt="Airbnb Logo" className="nav--logo" />

      <div id="menu-bar" class="fas fa-bars"></div>
      <div className="pages">
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div class="icons">
        <a href="#" class="fas fa-shopping-cart"></a>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-user-circle"></a>
      </div>
    </nav>
  );
}

export default Navbar;
