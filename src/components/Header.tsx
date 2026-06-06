const BUY_LINK = "https://your-shopify-product-link.com";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        1 Grate Shirt
      </a>

      <nav className="nav">
        <a href="#story">Story</a>
        <a href="#mission">Mission</a>
        <a href={BUY_LINK} className="navBuy">
          Buy
        </a>
      </nav>
    </header>
  );
}