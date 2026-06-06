const BUY_LINK = "https://your-shopify-product-link.com";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 1 Grate Shirt. A dumb shirt with a dream.</p>
      <a href={BUY_LINK}>Buy the shirt</a>
    </footer>
  );
}