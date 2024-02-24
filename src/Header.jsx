function Header() {
  return (
    <header>
      <div className="logo">React-router</div>
      <nav>
        <div>Home</div>
        <div>Products</div>
        <div>Contact us</div>
        <div>About us</div>
      </nav>
      <div className="btns">
        <div className="login-btn">Login</div>
        <div className="sign-up-btn">Sign up</div>
      </div>
    </header>
  );
}

export default Header;
